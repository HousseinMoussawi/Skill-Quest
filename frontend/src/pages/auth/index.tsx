import React from "react";
import './index.css'
import loginImage from '../../assets/login-image.png'
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";


const Auth = () => {
  return (
    <div className="auth flex">
      <div className="left-half">
        
        <img src={loginImage} alt="" />
      </div>
      
      <Outlet/>
    </div>
  );
};

export default Auth;
