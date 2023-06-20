import React from "react";
import { useUser } from "../../hooks/useUserRole";
import Navbar from "../Navbar";


import AdminNav from "../admin/Admin_Nav";
import UserNav from "../user/User_Nav";
import Carousel from "../home/Carousel";

export const Dashboard = () => {
  const { isLoggedIn, roleId } = useUser();

  if (!isLoggedIn) {
    return (
      <>
        <Navbar />
        <Carousel />
        

        

      </>
    );
  }
  return (
    <>
      {roleId === 1 && <AdminNav />}
      {roleId === 2 && <UserNav />}
    </>
  );
};
