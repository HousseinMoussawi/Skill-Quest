import React, { ChangeEvent, FC } from "react";
import { LoginWithGoogle } from "../login-with-google";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  title: string;
  location: string;
};

const Signup: FC<Props> = ({ title, location }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setusername] = useState<string>("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location);
  };

  const signupButtonHandler = async () => {
    try {
      const body = {
        email: email,
        password: password,
        username: username,
        role: title.toUpperCase(),
      };

      console.log(title.toUpperCase());

      const response = await axios.post(
        "http://localhost:3001/auth/register",
        body
      );
      if (response.status === 201) {
        const data = response.data;
        console.log(data);
        toast.success("Registration successful");
        if (data.user.role === "CREATOR") navigate("/create-game");
        else navigate("/progress");
      }
    } catch (error: any) {
      console.log(error.response.data);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="signup flex column center">
      <ToastContainer />
      <h1>{title} Sign up</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username"
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={signupButtonHandler}>Sign up</button>
      <h5>
        already have an account? <span onClick={handleClick}>Login</span>
      </h5>
      <h2>Or</h2>
      <LoginWithGoogle />
    </div>
  );
};

export default Signup;
