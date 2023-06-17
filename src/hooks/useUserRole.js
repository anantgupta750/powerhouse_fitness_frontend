import { createContext, useContext, useRef, useState } from "react";

const UserContext = createContext({ isLoggedIn: false, roleId: null });

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const roleIdRef = useRef(null);

  const logout = () => setIsLoggedIn(false);
  const loggedIn = (roleId) => {
    setIsLoggedIn(true);
    roleIdRef.current = roleId;
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, logout, loggedIn, roleId: roleIdRef.current }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
