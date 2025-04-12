import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { home: "Home", aboutUs: "About Us", howItWorks: "How It Works", joinWaitlist: "Join Waitlist", login: "Login" } },
    fr: { translation: { home: "Accueil", aboutUs: "À Propos", howItWorks: "Comment ça marche", joinWaitlist: "Rejoindre la liste d'attente", login: "Connexion" } },
    es: { translation: { home: "Inicio", aboutUs: "Sobre Nosotros", howItWorks: "Cómo Funciona", joinWaitlist: "Únete a la Lista", login: "Iniciar Sesión" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
