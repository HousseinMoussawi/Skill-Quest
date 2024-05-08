import React, { ChangeEvent, FC, useState } from "react";
import { LoginWithGoogle } from "../login-with-google";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


type Props = {
  title: string;
  location: string;
};

const Login: FC<Props> = ({
  title,
  location,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location);
  };

  const loginButtonHandler = async()=>{

    try {

      const body = {
        email: email,
        password:password,
        role: title.toUpperCase()
      }

     
      const response = await axios.post(
        'http://localhost:3001/auth/login',body
      )
      if(response.status==200)
        {
          const data = response.data
          localStorage.setItem('token',data.token)
          console.log(response.data)
          toast.success('Login successful')
        }
        else{
          console.log(response.data)
        }

      
    } catch (error:any) {
      console.log(error.response.data)
      toast.error(error.response.data)
    }
  }

  return (
    <div className="login flex column center">
      <ToastContainer />
      <h1>{title} Login</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username or email"
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
      <button onClick={loginButtonHandler}>Login</button>
      <h5>
        don't have an account? <span onClick={handleClick}>Sign up</span>
      </h5>
      <h2>Or</h2>
      <LoginWithGoogle />
    </div>
  );
};

export default Login;
