import React,{ useState }from "react";
import { LoginWithGoogle } from "../login-with-google";

type Props = {
  title: string;
};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <LoginWithGoogle/>
    </div>
  );
};

export default Login;
