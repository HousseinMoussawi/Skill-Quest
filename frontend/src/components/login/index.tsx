import React,{ ChangeEvent, FC }from "react";
import { LoginWithGoogle } from "../login-with-google";

type Props = {
  title: string;
  emailChangeHandler:(value:ChangeEvent<HTMLInputElement>)=>void,
  passwordChangeHandler:(value:ChangeEvent<HTMLInputElement>)=>void,
  loginButtonHandler:()=>void,
};

const Login: FC<Props> = ({title,emailChangeHandler, passwordChangeHandler,loginButtonHandler}) => {
  

  const login = async () => {
    
  };

  return (
    <div>
      <h1>{title} Login</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username or email"
        onChange={emailChangeHandler}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <button onClick={loginButtonHandler}>Login</button>
      <h2>
        don't have an account? <span>Sign up</span>
      </h2>
      <h2>------------------Or------------------</h2>
      <LoginWithGoogle/>
    </div>
  );
};

export default Login;
