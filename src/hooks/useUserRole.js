import { createContext, useContext, useRef, useState } from "react";

const UserContext = createContext({ isLoggedIn: false, roleId: null });

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userinfo, setuserinfo] = useState(null);
  const roleIdRef = useRef(null);

  const logout = () => setIsLoggedIn(false);
  const loggedIn = (roleId, userinfo) => {
    setIsLoggedIn(true);
    console.log(userinfo);
    setuserinfo(userinfo);
    roleIdRef.current = roleId;
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        logout,
        loggedIn,
        roleId: roleIdRef.current,
        user: userinfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
