import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userAtom } from "@/store/auth";
import { fillProfileInfo } from "@/supabase/account";
import { FileProfileInfoPayLoad } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";

import { ChangeEvent, useState } from "react";


export function AuthorDialog() {
 const user = useAtom(userAtom);
 console.log(user)

  const [profilePayload, setProfilePayload] = useState<FileProfileInfoPayLoad>({
    id:"",
    avatar_url: "",
    full_name_en: "",
    full_name_ka: "",
    last_name_en: "",
    last_name_ka: "",
    username: "",
    phoneNumber: "",

})

const {mutate:handleFillProfileInfo} = useMutation({
    mutationKey: ["fill-profile-info"],
    mutationFn:fillProfileInfo,
})

const handleProfileInfoUpdate = (event: ChangeEvent<HTMLInputElement>) =>{
  setProfilePayload({...profilePayload,[event.target.id]:event.target.value})
}

const handleProfileInfoSubmit = () => {

  handleFillProfileInfo({ ...profilePayload, id: user[0]?.user.id });
};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className=" grid gap-4 py-4 ">
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="nameEn" className="text-left">
              Name En
            </Label>
            <Input
              id="full_name_en"
              defaultValue="Name in English"
              className="col-span-3"
              onChange={(event)=>handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="nameKa" className="text-left">
              Name Ka
            </Label>
            <Input
              id="full_name_ka"
              defaultValue="Name in Georgian"
              className="col-span-3"
              onChange={(event)=>handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="lastNameEn" className="text-left">
              Last Name En
            </Label>
            <Input
              id="last_name_en"
              defaultValue="last Name in english"
              className="col-span-3"
              onChange={(event)=>handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="lastNameKa" className="text-left">
              Last Name Ka
            </Label>
            <Input
              id="last_name_ka"
              defaultValue="last Name in Georgian"
              className="col-span-3"
              onChange={(event)=>handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="avatar" className="text-left">
              avatar
            </Label>
            <Input id="avatar_url" defaultValue="avatar" className="col-span-3" />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="phone" className="text-left">
              Phone Number
            </Label>
            <Input
              type="text"
              id="phoneNumber"
              defaultValue="Phone Number"
              className="col-span-3"
              onChange={(event)=>handleProfileInfoUpdate(event)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleProfileInfoSubmit} type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}