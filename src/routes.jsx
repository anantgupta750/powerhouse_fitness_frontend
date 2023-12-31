import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login";
import { MembershipViewComponent } from "./components/MembershipViewComponent";
import Register from "./components/Register";
import AdminNav from "./components/admin/Admin_Nav";
import ProgramReg from "./components/admin/ProgramReg";
import Programlist from "./components/admin/Programlist";
import Trainer from "./components/admin/TrainerReg";
import Trainerlist from "./components/admin/Trainerlist";
import Userlist from "./components/admin/Userlist";
import About from "./components/home/About";
import Carousel from "./components/home/Carousel";
import Contactus from "./components/home/Contactus";
import Workouts from "./components/home/Workouts";
import MembershipReg from "./components/user/MembershipReg";
import UserNav from "./components/user/User_Nav";
import Usernavbar from "./components/user/Usernavbar";
import Userprogramlist from "./components/user/Userprogramlist";
import Usertrainerlist from "./components/user/Usertrainerlist";

export const routes = [
  { path: "", Component: Dashboard },
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
  { path: "workouts", Component: Workouts},
  { path:"contactus", Component: Contactus},
  { path: "carousel", Component:Carousel},
  { path: "usernav", Component: UserNav},
  { path: "adminnav", Component: AdminNav},
  { path: "usertrainerlist",Component: Usertrainerlist},
  { path: "usernavbar", Component:Usernavbar},
  { path: "userprogramlist", Component: Userprogramlist},
  { path: "program/update/:id", Component: ProgramReg },
];
