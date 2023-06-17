import React from "react";
import { useUser } from "../../hooks/useUserRole";
import Navbar from "../Navbar";

import AdminNav from "../admin/Admin_Nav";
import UserNav from "../user/User_Nav";

export const Dashboard = () => {
  const { isLoggedIn, roleId } = useUser();

  if (!isLoggedIn) {
    return <Navbar />;
  }
  return (
    <>
      {roleId === 1 && <AdminNav />}
      {roleId === 2 && <UserNav />}
    </>
  );
};
