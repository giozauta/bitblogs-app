import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/supabase/auth";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/login");
    },
  });

  const onSubmit = (fieldValues: Inputs) => {
    if (
      fieldValues.password !== fieldValues.confirmPassword
    ) {
        alert("Passwords do not match");
        return;
    }


    handleRegister(fieldValues);
  };

  return (
    <form className="w-full space-y-6">
      <div className="space-y-2 w-full">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {t("registration.email")}
        </label>
        <Controller
          name="email"
          rules={{ required: true, minLength: 10, maxLength: 50 }}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <input
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...field}
                />

                {error?.type === "required" && (
                  <p className="text-red-500">
                    {t("authorisation.emailRequiredError")}
                  </p>
                )}
                {error?.type === "minLength" && (
                  <p className="text-red-500">
                    {t("authorisation.emailMinLengthError")}
                  </p>
                )}
                {error?.type === "maxLength" && (
                  <p className="text-red-500">
                    {t("authorisation.emailMaxLengthError")}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>

      <div className="space-y-2 w-full">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {t("registration.password")}
        </label>
        <Controller
          name="password"
          rules={{ required: true, minLength: 10, maxLength: 50 }}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <input
                  type="password"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...field}
                />

                {error?.type === "required" && (
                  <p className="text-red-500">
                    {t("authorisation.passwordRequiredError")}
                  </p>
                )}
                {error?.type === "minLength" && (
                  <p className="text-red-500">
                    {t("authorisation.passwordMinLengthError")}
                  </p>
                )}
                {error?.type === "maxLength" && (
                  <p className="text-red-500">
                    {t("authorisation.passwordMaxLengthError")}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>
      <div className="space-y-2 w-full">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {t("registration.confirmPassword")}
        </label>
        <Controller
          name="confirmPassword"
          rules={{ required: true, minLength: 10, maxLength: 50 }}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <>
                <input
                  type="password"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...field}
                />
                {error?.type === "required" && (
                  <p className="text-red-500">
                    {t("authorisation.passwordRequiredError")}
                  </p>
                )}
                {error?.type === "minLength" && (
                  <p className="text-red-500">
                    {t("authorisation.passwordMinLengthError")}
                  </p>
                )}
                {error?.type === "maxLength" && (
                  <p className="text-red-500">
                    {t("authorisation.passwordMaxLengthError")}
                  </p>
                )}
              </>
            );
          }}
        />
      </div>
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-blue-500 hover:bg-blue-700"
        onClick={handleSubmit(onSubmit)}
      >
        {t("registration.signUp")}
      </button>
    </form>
  );
};

export default SignUpForm;
