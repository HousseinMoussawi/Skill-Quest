import React from "react";
import './index.css'
import loginImage from '../../assets/login-image.png'
import { Outlet } from "react-router-dom";



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
