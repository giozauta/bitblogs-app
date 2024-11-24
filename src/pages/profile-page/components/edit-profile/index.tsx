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
import { userAtom, userIconAtom } from "@/store/auth";
import { upsertProfileInfo } from "@/supabase/account";
import { FileProfileInfoPayLoad } from "@/supabase/account/index.types";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { ChangeEvent, PropsWithChildren, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";
import SelectAfvatar from "../select-avatar/SelectAvatar";

const EditProfile: React.FC<PropsWithChildren<{ refetch: () => void }>> = ({
  refetch,
}) => {
  const user = useAtom(userAtom);
  const userId = user[0]?.user.id ?? "";
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [profilePayload, setProfilePayload] = useState({
    id: userId || "",
    full_name_en: "",
    avatar_url: "",
    full_name_ka: "",
    last_name_en: "",
    last_name_ka: "",
    phoneNumber: "",
  });
  const [, setIconAtom] = useAtom(userIconAtom);

  //for avatar
  const avatar = createAvatar(avataaars, {
    seed: selectedAvatar,
  });
  const svg = avatar.toString();
  const encodedSvg = encodeURIComponent(svg).replace(/%20/g, " ");
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;

  const { mutate: handleProfileInfo, isError } = useMutation({
    mutationKey: ["upsertProfileInfo"],
    mutationFn: upsertProfileInfo,
    onSuccess: () => {
      refetch();
    },
    onError: (err) => {
      console.error("Error during upsert:", err);
    },
  });

  const handleProfileInfoUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setProfilePayload({
      ...profilePayload,
      [event.target.id]: event.target.value,
    });
  };

  const handleProfileInfoSubmit = () => {
    const payload: FileProfileInfoPayLoad = {
      ...profilePayload,
      id: userId,
      avatar_url: dataUrl,
    };
    setIconAtom(dataUrl);

    alert("User info updated");
    handleProfileInfo(payload);
    setProfilePayload({
      id: userId || "",
      full_name_en: "",
      avatar_url: "",
      full_name_ka: "",
      last_name_en: "",
      last_name_ka: "",
      phoneNumber: "",
    });
  };

  const handleAvatarChange = (value: string) => {
    setSelectedAvatar(value);
  };

  if (isError) {
    return (
      <div>
        <p>Error updating profile info</p>
      </div>
    );
  }

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
        <div className=" grid grid-cols-4 items-center gap-x-1">
          <img src={dataUrl} alt="Avatar" />
          <SelectAfvatar handleAvatarChange={handleAvatarChange} />
        </div>
        <div className=" grid gap-4 py-4 ">
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="nameEn" className="text-left">
              Name En
            </Label>
            <Input
              id="full_name_en"
              value={profilePayload.full_name_en}
              className="col-span-3"
              onChange={(event) => handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="nameKa" className="text-left">
              Name Ka
            </Label>
            <Input
              id="full_name_ka"
              value={profilePayload.full_name_ka}
              className="col-span-3"
              onChange={(event) => handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="lastNameEn" className="text-left">
              Last Name En
            </Label>
            <Input
              id="last_name_en"
              value={profilePayload.last_name_en}
              className="col-span-3"
              onChange={(event) => handleProfileInfoUpdate(event)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="lastNameKa" className="text-left">
              Last Name Ka
            </Label>
            <Input
              id="last_name_ka"
              value={profilePayload.last_name_ka}
              className="col-span-3"
              onChange={(event) => handleProfileInfoUpdate(event)}
            />
          </div>

          <div className=" grid grid-cols-4 items-center gap-x-1">
            <Label htmlFor="phone" className="text-left">
              Phone Number
            </Label>
            <Input
              type="text"
              id="phoneNumber"
              value={profilePayload.phoneNumber}
              className="col-span-3"
              onChange={(event) => handleProfileInfoUpdate(event)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleProfileInfoSubmit} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
