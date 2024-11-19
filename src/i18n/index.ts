import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import headerLangEn from "./en/header/index.json";
import headerLangKa from "./ka/header/index.json";
import authorisationEn from "./en/authorisation/index.json";
import authorisationka from "./ka/authorisation/index.json";
import registrationEn from "./en/registration/index.json";
import registrationKa from "./ka/registration/index.json";

i18next.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: {
        header: headerLangEn,
        authorisation: authorisationEn,
        registration: registrationEn,
      },
    },
    ka: {
      translation: {
        header: headerLangKa,
        authorisation: authorisationka,
        registration: registrationKa,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
