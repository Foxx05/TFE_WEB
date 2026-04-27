import { route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("app", "routes/app.tsx"),
  route("history", "routes/history.tsx"),
  route("contact", "routes/contact.tsx"),
  route("credits", "routes/credit.tsx"),
]