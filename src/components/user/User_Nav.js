import { Link } from "react-router-dom";
// import { useUser } from "../../hooks/useUserRole";
import Carousel from "../home/Carousel";
import Usernavbar from "./Usernavbar";

const UserNav = () => {
  // const info = useUser();
  return (
    <>
      <Usernavbar />
      <Carousel />
      
    </>
  );
};
export default UserNav;
