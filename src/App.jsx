import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./components/PrivateRoutes";
import Auth from "./pages/auth/Auth";
import EditProfile from "./pages/editProfile/EditProfile";
import Home from "./pages/home/Home";
import "./app.css";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
