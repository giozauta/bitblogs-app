import { login } from "@/supabase/auth";
import { useMutation } from "@tanstack/react-query";
import { useForm} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type Inputs = {
    email:string,
    password:string
}

const LoginInputForm:React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { register, handleSubmit ,formState} = useForm<Inputs>();

console.log(formState.errors)
    

    const { mutate: handleLogin } = useMutation({
        mutationKey: ["login"],
        mutationFn: login,
        onSuccess: () => {
          navigate("/profilePage");
        },
        onError: (error) => {
          alert("იუზერი ან პაროლი არასწორია");
          console.log(error);
        },
      });


    const onSubmit = (fieldValues:Inputs) => {
        handleLogin(fieldValues)
    }
  
    return (
      <form className=" flex flex-col justify-center w-full space-y-6" >
        <label 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t("authorisation.email")}
        </label>
        <input 
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            {...register("email",{required:true,maxLength:50,minLength:5})}
        />
        {formState.errors.email?.type==="required"&&<p className="text-red-500">{t("authorisation.emailRequiredError")}</p>}
        {formState.errors.email?.type==="minLength"&&<p className="text-red-500">{t("authorisation.emailMinLengthError")}</p>}
        {formState.errors.email?.type==="maxLength"&&<p className="text-red-500">{t("authorisation.emailMaxLengthError")}</p>}
        <label 
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t("authorisation.password")}
        </label>
        <input 
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            {...register("password",{required:true,maxLength:50,minLength:5})}
        />
        {formState.errors.email?.type==="required"&&<p className="text-red-500">{t("authorisation.passwordRequiredError")}</p>}
        {formState.errors.email?.type==="minLength"&&<p className="text-red-500">{t("authorisation.passwordMinLengthError")}</p>}
        {formState.errors.email?.type==="maxLength"&&<p className="text-red-500">{t("authorisation.passwordMaxLengthError")}</p>}
        <button
            onClick={handleSubmit(onSubmit)}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 w-full bg-blue-500 hover:bg-blue-700"
        >Log in
        </button>
      </form>
      )
}

export default LoginInputForm
