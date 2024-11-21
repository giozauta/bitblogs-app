import { useTranslation } from "react-i18next";
import { SignUpForm } from "./components/sign-up/SignUpForm";
import { Link } from "react-router-dom";
const Registration: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="registrationPageContainer min-h-screen bg-background flex items-center justify-center">
      <div className="registration rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="registrationContainerHeader flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            {t("registration.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t("registration.instruction")}
          </div>
        </div>

        <div className="registrationContainerFormBox p-6 pt-0">
          <SignUpForm />
        </div>

        <div className="items-center p-6 pt-0 flex justify-center">
          <p className="text-sm text-muted-foreground">
            {t("registration.signUpText")}
            <Link
              to="/login"
              className="text-blue-700 active:bg-blue-700 hover:underline"
            >
              {t("registration.login")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
