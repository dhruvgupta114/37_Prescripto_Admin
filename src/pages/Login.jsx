import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets.js";
import { AdminContext } from "../context/adminContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/doctorContext.jsx";
const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dtoken", data.token);
          setDToken(data.token);
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          {" "}
          <span className="text-primary">{state}</span> Login
        </p>
        {state === "Admin" ? (
          <p>
            Admin Email -&gt;{" "}
            <span className="text-primary">admin@prescripto.com</span> <br />{" "}
            Admin Pass -&gt; <span className="text-primary">qwerty123</span>{" "}
          </p>
        ) : (
          <p>
            Doctor Email -&gt;{" "}
            <span className="text-primary">
              {`{doctorname(small-case)}`}@prescripto.com
            </span>{" "}
            <br /> Doctor Pass -&gt;{" "}
            <span className="text-primary">
              {`{doctorname(small-case)}`}@123
            </span>{" "}
          </p>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-[#dadada] rounded w-full p-2 mt-1"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-md text-base"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
