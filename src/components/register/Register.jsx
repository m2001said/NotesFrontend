// import axios from "axios";
// import React from "react";
// import toast from "react-hot-toast";
// import "../login/login.css";

// const Register = () => {
//   const register = async (e) => {
//     e.preventDefault();
//     //get values of user which will be in the input
//     const user = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       password: e.target.password.value,
//     };

//     try {
//       await axios.post("/api/auth/register", user);
//       toast.success("Register Successful");
//     } catch (error) {
//       console.log(error);
//       toast.error("Register Failed");
//     }
//   };

//   return (
//     <div className="login">
//       <h1 className="title">Register</h1>
//       <form onSubmit={register}>
//         <label htmlFor="name">
//           Full Name:
//           <input name="name" type="text" placeholder="Full Name" required />
//         </label>
//         <label htmlFor="email">
//           email:
//           <input name="email" type="email" placeholder="email" required />
//         </label>
//         <br />
//         <label htmlFor="password">
//           password:
//           <input
//             name="password"
//             type="password"
//             placeholder="password"
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../login/login.css";

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  //for register
  const register = async (e) => {
    e.preventDefault();
    //get values of user which will be in the input
    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await axios.post("/api/auth/register", user);
      setIsSignUp((prevShowPassword) => !prevShowPassword);
      toast.success("Register Successful");
    } catch (error) {
      console.log(error);
      toast.error("Register Failed");
    }
  };

  //for login
  const login = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await axios.post("/api/auth/login", {
        email,
        password,
      });
      navigate("/");
      toast.success("Login is success");
    } catch (err) {
      console.log(err);
      toast.success("Login is failed");
    }
  };
  //
  const switchMode = () => {
    setIsSignUp((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login">
      <h3 className="title">{isSignUp ? "Register" : "Login"}</h3>

      <form onSubmit={isSignUp ? register : login}>
        {isSignUp ? (
          <label htmlFor="name">
            Full Name :
            <input name="name" type="text" placeholder="Full Name" required />
          </label>
        ) : (
          ""
        )}

        <label htmlFor="email">
          email :
          <input name="email" type="email" placeholder="email" required />
        </label>
        <br />
        <label htmlFor="password">
          password :
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
        </label>
        <br />

        <button type="button" onClick={switchMode}>
          {isSignUp
            ? " You already have an account so LOGIN "
            : " You do not have an account so REGISTER"}{" "}
          &rarr;
        </button>
        <br />
        <button type="submit">{isSignUp ? "Register" : "Login"}</button>
      </form>
    </div>
  );
};

export default Register;
