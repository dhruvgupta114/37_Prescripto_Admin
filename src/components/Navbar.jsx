import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/adminContext";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/doctorContext";

const Navbar = () => {
  const { token, setToken } = useContext(AdminContext);
  const { dtoken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const logout = () => {
    if (token) {
      navigate("/");
      token && setToken("");
      token && localStorage.removeItem("token");
    }
    if (dtoken) {
      navigate("/doctor-dashboard");
      dtoken && setDToken("");
      dtoken && localStorage.removeItem("dtoken");
    }
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b  bg-white">
      <div className="flex items-center gap-2 text-xs">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {token ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-sm  py-2 px-10 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
