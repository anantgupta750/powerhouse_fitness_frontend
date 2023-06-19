import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login";
import { MembershipViewComponent } from "./components/MembershipViewComponent";
import Register from "./components/Register";
import ProgramReg from "./components/admin/ProgramReg";
import Programlist from "./components/admin/Programlist";
import Trainer from "./components/admin/TrainerReg";
import Trainerlist from "./components/admin/Trainerlist";
import Userlist from "./components/admin/Userlist";
import About from "./components/home/About";
import MembershipReg from "./components/user/MembershipReg";

export const routes = [
  { path: "", Component: Login },
  { path: "login", Component: Login },
  { path: "register", Component: Register },
  { path: "dashboard", Component: Dashboard },
  { path: "userlist", Component: Userlist },
  { path: "trainerregister", Component: Trainer },
  { path: "trainerlist", Component: Trainerlist },
  { path: "programregister", Component: ProgramReg },
  { path: "programlist", Component: Programlist },
  { path: "membershipregister", Component: MembershipReg },
  { path: "trainer/update/:id", Component: Trainer },
  { path: "membership/view", Component: MembershipViewComponent },
  { path: "about", Component: About },
];
