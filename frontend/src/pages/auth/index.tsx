import React from "react";
import './index.css'
import loginImage from '../../assets/login-image.png'
import { Outlet } from "react-router-dom";
import NavbarProfile from "../../components/navbar-profile";


const Auth = () => {
  return (
    <div className="auth flex">
      <div className="left-half">
        
        <img src={loginImage} alt="" />
      </div>
      <NavbarProfile name ='houssein' imageURl="asdsaddwa"/>
      <Outlet/>
    </div>
  );
};

export default Auth;
