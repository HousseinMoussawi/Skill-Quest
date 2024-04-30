import React, { useState } from "react";
import { LoginWithGoogle } from "../login-with-google";

type Props = {
  title: string;
};

const Signup = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


  const signup = ()=> {

  }


  return (
    <div>
      <h1>{props.title} Signup</h1>
      <input
        type="text"
        name=""
        id=""
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
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
      <button onClick={signup}>Signup</button>
      <h2>
        already have an account? <span>Login</span>
      </h2>
      <h2>------------------Or------------------</h2>
      <LoginWithGoogle/>
    </div>
  );
};

export default Signup;
