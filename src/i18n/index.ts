import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import headerLangEn from "./en/header/index.json";
import headerLangKa from "./ka/header/index.json";
import authorisationEn from "./en/authorisation/index.json";
import authorisationka from "./ka/authorisation/index.json";
import registrationEn from "./en/registration/index.json";
import registrationKa from "./ka/registration/index.json";

import editProfilesEn from "./en/editProfiles/index.json";
import editProfilesKa from "./ka/editProfiles/index.json";

i18next.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: {
        header: headerLangEn,
        authorisation: authorisationEn,
        registration: registrationEn,
        editProfiles: editProfilesEn,
      },
    },
    ka: {
      translation: {
        header: headerLangKa,
        authorisation: authorisationka,
        registration: registrationKa,
        editProfiles: editProfilesKa,
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
