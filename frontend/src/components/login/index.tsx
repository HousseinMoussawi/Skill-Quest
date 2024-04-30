import React from "react";
import { Auth, googlePovider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";


type Props = {
  title: string;
};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginWithGoogle= async ()=>{
    try{
        await signInWithPopup(Auth,googlePovider)
    } catch (err){
        console.log(err)
    }
  }

  const login = async () => {
    
  };

  return (
    <div>
      <h1>{props.title} Login</h1>
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
      <button onClick={login}>Login</button>
      <h2>
        don't have an account? <span>Sign up</span>
      </h2>
      <h2>------------------Or------------------</h2>
      <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  );
};

export default Login;
