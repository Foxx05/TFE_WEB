import { route, index } from "@react-router/dev/routes";

export default [
  route("projets/tfe_web", "routes/home.tsx"),
  route("projets/tfe_web/app", "routes/app.tsx"),
  route("projets/tfe_web/history", "routes/history.tsx"),
  route("projets/tfe_web/contact", "routes/contact.tsx"),
  route("projets/tfe_web/credits", "routes/credit.tsx"),
];