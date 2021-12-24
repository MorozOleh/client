import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const user = "user";

  const signin = (credentials) => {
    localStorage.setItem(user, JSON.stringify(credentials));
    setUserInfo(credentials.user);
    setIsAuth(true);
  };
  const signout = () => {
    localStorage.removeItem(user);
    setUserInfo(null);
    setIsAuth(false);
  };

  useEffect(() => {
    if (localStorage.getItem(user)) {
      const credentials = JSON.parse(localStorage.getItem(user));
      signin(credentials);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, userInfo, setUserInfo, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
