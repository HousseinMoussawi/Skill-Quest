import React from "react";
import './index.css'
import UserType from "../../components/user_type_btn";
import loginImage from '../../assets/login-image.png'
import Login from "../../components/login";
import Signup from "../../components/signup";
type Props = {};


const Auth = (props: Props) => {
  return (
    <div className="auth flex">
      <div className="left-half">
        
        <img src={loginImage} alt="" />
      </div>
      <div className="right-half flex center">
        <UserType opposite="player" user='creator' auth="registration" />
        <Signup title="Hello" />
      </div>
    </div>
  );
};

export default Auth;
