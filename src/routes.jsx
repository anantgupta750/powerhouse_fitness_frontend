import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login";
import Register from "./components/Register";
import Userlist from "./components/admin/Userlist";
import Trainer from "./components/admin/TrainerReg";
import Trainerlist from "./components/admin/Trainerlist";
import ProgramReg from "./components/admin/ProgramReg";

export const routes = [
  { path: "", Component: Login },
  { path: "login", Component: Login },
  { path: "register", Component: Register },
  { path: "dashboard", Component: Dashboard },
  { path: "userlist", Component: Userlist},
  { path: "trainerregister", Component: Trainer},
  { path: "trainerlist", Component:Trainerlist},
  { path: "programregister", Component: ProgramReg}
];
