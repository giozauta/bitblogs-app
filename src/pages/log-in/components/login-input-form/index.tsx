import { useLogIn } from "@/react-query/mutation/log-in";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const LoginInputForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<Inputs>({
    defaultValues: { email: "", password: "" },
  });

  const { mutate: handleLogin } = useLogIn();

  const onSubmit = (fieldValues: Inputs) => {
    if (fieldValues.email == "" && fieldValues.password == "") {
      return;
    }
    handleLogin(fieldValues,{
      onSuccess: () => {
        navigate("/profile");
      },
      onError: (error) => {
        alert(t("authorisation.error"));
        console.log(error);
      },
    });
  };

  return (
    <form className=" flex flex-col justify-center w-full space-y-6">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {t("authorisation.email")}
      </label>
      <Controller
        name="email"
        control={control}
        rules={{ required: true, minLength: 10, maxLength: 50 }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <input
                onChange={field.onChange} // ეს იგივეა რომ გავსფრიდოთ {...field}
                value={field.value} //ეს იგივეა რომ გავსფრიდოთ {...field}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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

      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {t("authorisation.password")}
      </label>
      <Controller
        name="password"
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 50 }}
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <input
                type="password"
                {...field} //იგივეა რომ ამოგვეღო ცალცალკე onChange={field.onChange} value={field.value}
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
      {}
      <button
        onClick={handleSubmit(onSubmit)}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-blue-500 hover:bg-blue-700"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginInputForm;
