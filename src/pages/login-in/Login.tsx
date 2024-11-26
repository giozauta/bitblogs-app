import LoginInputForm from "./components/login-input-form"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Authorization: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="authorizationPageContainer   min-h-screen bg-background flex items-center justify-center">
      <div className="authorizationContainer rounded-xl border bg-card text-card-foreground shadow w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="tracking-tight text-2xl font-bold text-center">
            {t("authorisation.title")}
          </div>
          <div className="text-sm text-muted-foreground text-center">
            {t("authorisation.instruction")}
          </div>
        </div>
        <div className="inputFormBox p-6 pt-0  ">
          <LoginInputForm />

        </div>
        <div className={"items-center p-6 pt-0 flex justify-between"}>
          <Link
            className="text-blue-700 text-sm  active:bg-blue-700 hover:underline"
            to="/"
          >
            {t("authorisation.forgetPassword")}
          </Link>
          <p className="text-sm text-muted-foreground">
            {t("authorisation.signUpText")}
            <Link
              className="text-blue-700 text-sm  active:bg-blue-700 hover:underline"
              to="/register"
            >
              {t("authorisation.signUp")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
