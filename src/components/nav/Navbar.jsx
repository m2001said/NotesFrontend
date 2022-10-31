import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
import "./navbar.css";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/users/me");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout");
      setUser(null);
      toast.success("Logged out successfully");
      navigate("/auth");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;
  return (
    <header>
      <div className="userInfo">
        <FaUserAlt className="userInfo-icon" />
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="buttons">
        <Link to="/edit-profile" className="buttons-editBtn">
          Edit your profile
        </Link>
        <button type="button" className="buttons-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
