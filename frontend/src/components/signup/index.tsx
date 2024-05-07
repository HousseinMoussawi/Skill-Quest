import React, { ChangeEvent, FC } from "react";
import { LoginWithGoogle } from "../login-with-google";
import './index.css'

type Props = {
  title: string;
  emailChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  passwordChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  usernameChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  signupButtonHandler: () => void;
};

const Signup: FC<Props> = ({title,usernameChangeHandler,passwordChangeHandler,emailChangeHandler,signupButtonHandler}) => {
  
  return (
    <div className="signup flex column center">
      <h1>{title} Signup</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username"
        onChange={usernameChangeHandler}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Email"
        onChange={emailChangeHandler}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Password"
        onChange={passwordChangeHandler}
      />
      <button onClick={signupButtonHandler}>Signup</button>
      <h5>
        already have an account? <span>Login</span>
      </h5>
      <h2>Or</h2>
      <LoginWithGoogle/>
    </div>
  );
};

export default Signup;
