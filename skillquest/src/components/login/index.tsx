import React from 'react'

type Props = {
    title: string,
}

const Login = (props: Props) => {
  return (
    <div>
        <h1>{props.title} Login</h1>
        <input type="text" name="" id="" placeholder='Username or email'/>
        <input type="text" name="" id="" placeholder='Password'/>
        <button>Login</button>
        <h2>don't have an account? <span>Sign up</span></h2>
        <h2>------------------Or------------------</h2>
        <button>Login with google</button>
    </div>
  )
}

export default Login