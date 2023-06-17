import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login";
import Register from "./components/Register";
import Userlist from "./components/admin/Userlist";

export const routes = [
  { path: "", Component: Login },
  { path: "login", Component: Login },
  { path: "register", Component: Register },
  { path: "dashboard", Component: Dashboard },
  { path: "userlist", Component: Userlist},
];
