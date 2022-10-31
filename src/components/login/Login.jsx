// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "./login.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       await axios.post("/api/auth/login", {
//         email,
//         password,
//       });
//       navigate("/");
//       toast.success("Login is success");
//     } catch (err) {
//       console.log(err);
//       toast.success("Login is failed");
//     }
//   };
//   return (
//     <div className="login">
//       <h1>Login</h1>
//       <form onSubmit={login}>
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
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
