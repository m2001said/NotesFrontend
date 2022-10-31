import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
// import Layout from "../../components/layout/Layout";
// import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import "./auth.css";

const Auth = () => {
  //to prevent user to go to auth page if he login so he should logout first
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
      toast.error("Please logout first");
    }
  }, [auth, navigate]);

  return (
    <>
      <h1 className="auth-address"> Your Notes App</h1>
      {/* <div className="auth"> */}
      {/* <Login /> */}
      <Register />
      {/* </div> */}
    </>
  );
};

export default Auth;
