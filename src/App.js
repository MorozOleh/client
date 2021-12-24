import React from "react";
import { AppBar } from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import { Registration, Login, Profile } from "./routes";

import { AuthProvider } from "./contexts/AuthContext";

export const App = () => {
  return (
    <AuthProvider>
      <AppBar />
      <Routes>
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </AuthProvider>
  );
};
