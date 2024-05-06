import React from "react";
import './index.css'
import loginImage from '../../assets/login-image.png'
import Login from "../../components/login";
type Props = {};


const Auth = (props: Props) => {
  return (
    <div className="auth flex">
      <div className="left-half">
        <img src={loginImage} alt="" />
      </div>
      <div className="right-half flex center">
        <Login title="Hello" />
      </div>
    </div>
  );
};

export default Auth;
