import { avataaars } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { Button } from "@/components/ui/button";
import Select from "react-select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm, Controller } from "react-hook-form";

import { useAtom } from "jotai";
import { userAtom, userIconAtom } from "@/store/auth";
import { FileProfileInfoPayLoad } from "@/supabase/account/index.types";
import { useTranslation } from "react-i18next";
import { useUpdateProfileInfo } from "@/react-query/mutation/profile";

type avatarURl = {
  value: string;
  label: string;
};

type Inputs = {
  id: string;
  avatar_url: avatarURl;
  full_name_en: string;
  full_name_ka: string;
  last_name_en: string;
  last_name_ka: string;
  phoneNumber: string;
};

const EditProfileInfo: React.FC<{ refetch: () => void }> = ({ refetch }) => {
  const user = useAtom(userAtom);
  const userId = user[0]?.user.id ?? "";
  const [, setIconAtom] = useAtom(userIconAtom);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      id: userId,
      avatar_url: { value: "", label: "" },
      full_name_en: "",
      full_name_ka: "",
      last_name_en: "",
      last_name_ka: "",
      phoneNumber: "",
    },
  });
  const avatar = createAvatar(avataaars, {
    seed: watch("avatar_url").value,
  });
  const svg = avatar.toString();
  const encodedSvg = encodeURIComponent(svg).replace(/%20/g, " ");
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
  const { t } = useTranslation();

  const { mutate: handleProfileInfo } = useUpdateProfileInfo();

  const onSubmit = (formFields: Inputs) => {
    const payload: FileProfileInfoPayLoad = {
      ...formFields,
      id: userId,
      avatar_url: dataUrl,
    };

    handleProfileInfo(payload, {
      onSuccess: () => {
        refetch();
      },
      onError: (err) => {
        console.error("Error during upsert:", err);
      },
    });
    setIconAtom(dataUrl);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{t("editProfiles.editProfile")}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("editProfiles.editProfile")}</DialogTitle>
          <DialogDescription>{t("editProfiles.instruction")}</DialogDescription>
        </DialogHeader>

        <form>
          <div className=" grid grid-cols-4 items-center gap-x-1">
            <img className="" src={dataUrl} alt="Avatar" />
            <Controller
              name="avatar_url"
              control={control}
              render={({ field }) => (
                <Select
                  className="col-span-3 dark:text-black"
                  {...field}
                  options={[
                    { value: "Leo", label: "Leo" },
                    { value: "Destiny", label: "Destiny" },
                    { value: "Vivian", label: "Vivian" },
                    { value: "Kimberly", label: "Kimberly" },
                    { value: "Riley", label: "Riley" },
                  ]}
                />
              )}
            />
          </div>

          <div className=" grid gap-4 py-4 ">
            <div className=" grid grid-cols-4 items-center gap-x-1">
              <label
                htmlFor="full_name_en"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
              >
                {t("editProfiles.nameEnglish")}
              </label>
              <Controller
                control={control}
                rules={{
                  required: "nameError",
                  minLength: {
                    value: 2,
                    message: "nameMinLengthError",
                  },
                  maxLength: {
                    value: 50,
                    message: "nameMaxLengthError",
                  },
                }}
                name="full_name_en"
                render={({ field }) => {
                  return (
                    <input
                      id="full_name_en"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                      {...field}
                    />
                  );
                }}
              />
              <div className="  w-full col-start-2 col-span-3 ">
                {errors.full_name_en && (
                  <p className="text-red-500">
                    {t(`editProfiles.${errors.full_name_en.message}`)}
                  </p>
                )}
              </div>
            </div>

            <div className=" grid grid-cols-4 items-center gap-x-1">
              <label
                htmlFor="full_name_ka"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
              >
                {t("editProfiles.nameGe")}
              </label>
              <Controller
                control={control}
                rules={{
                  required: "nameError",
                  minLength: {
                    value: 2,
                    message: "nameMinLengthError",
                  },
                  maxLength: {
                    value: 50,
                    message: "nameMaxLengthError",
                  },
                }}
                name="full_name_ka"
                render={({ field }) => {
                  return (
                    <input
                      id="full_name_ka"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                      {...field}
                    />
                  );
                }}
              />
              <div className="  w-full col-start-2 col-span-3 ">
                {errors.full_name_ka && (
                  <p className="text-red-500">
                    {t(`editProfiles.${errors.full_name_ka.message}`)}
                  </p>
                )}
              </div>
            </div>

            <div className=" grid grid-cols-4 items-center gap-x-1">
              <label
                htmlFor="last_name_en"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
              >
                {t("editProfiles.lastNameEnglish")}
              </label>
              <Controller
                control={control}
                rules={{
                  required: "lastNameError",
                  minLength: {
                    value: 2,
                    message: "lastNameMinLengthError",
                  },
                  maxLength: {
                    value: 50,
                    message: "lastNameMaxLengthError",
                  },
                }}
                name="last_name_en"
                render={({ field }) => {
                  return (
                    <input
                      id="last_name_en"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                      {...field}
                    />
                  );
                }}
              />
              <div className="  w-full col-start-2 col-span-3 ">
                {errors.last_name_en && (
                  <p className="text-red-500">
                    {t(`editProfiles.${errors.last_name_en.message}`)}
                  </p>
                )}
              </div>
            </div>

            <div className=" grid grid-cols-4 items-center gap-x-1">
              <label
                htmlFor="last_name_ka"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
              >
                {t("editProfiles.lastNameGeorgian")}
              </label>
              <Controller
                control={control}
                rules={{
                  required: "lastNameError",
                  minLength: {
                    value: 2,
                    message: "lastNameMinLengthError",
                  },
                  maxLength: {
                    value: 50,
                    message: "lastNameMaxLengthError",
                  },
                }}
                name="last_name_ka"
                render={({ field }) => {
                  return (
                    <input
                      id="last_name_ka"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                      {...field}
                    />
                  );
                }}
              />
              <div className="  w-full col-start-2 col-span-3 ">
                {errors.last_name_ka && (
                  <p className="text-red-500">
                    {t(`editProfiles.${errors.last_name_ka.message}`)}
                  </p>
                )}
              </div>
            </div>

            <div className=" grid grid-cols-4 items-center gap-x-1">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-left"
              >
                {t("editProfiles.phoneNumber")}
              </label>
              <Controller
                control={control}
                rules={{
                  required: "phoneNumberError",
                  minLength: {
                    value: 2,
                    message: "phoneNumberMinLengthError",
                  },
                  maxLength: {
                    value: 50,
                    message: "phoneNumberMaxLengthError",
                  },
                }}
                name="phoneNumber"
                render={({ field }) => {
                  return (
                    <input
                      id="phoneNumber"
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm col-span-3"
                      {...field}
                    />
                  );
                }}
              />
              <div className="  w-full col-start-2 col-span-3 ">
                {errors.phoneNumber && (
                  <p className="text-red-500">
                    {t(`editProfiles.${errors.phoneNumber.message}`)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </form>

        <DialogFooter>
          <Button onClick={handleSubmit(onSubmit)}>
            {t("editProfiles.save")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileInfo;
