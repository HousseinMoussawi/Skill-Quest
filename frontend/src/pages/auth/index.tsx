import React from "react";
import './index.css'
import loginImage from '../../assets/login-image.png'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useEffect } from "react";

const Auth = () => {
const location = useLocation()
const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(location.pathname=='/auth' || location.pathname=='/auth/creator-login' ||location.pathname=='/creator-signup' ||location.pathname=='/auth/player-signup')
        localStorage.removeItem('token')
  }, [navigate]);

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
