import React from 'react'

type Props = {
    title: string,
}

const Signup = (props: Props) => {
  return (
    <div>
        <h1>{props.title} Signup</h1>
        <input type="text" name="" id="" placeholder='Username'/>
        <input type="text" name="" id="" placeholder='Email'/>
        <input type="text" name="" id="" placeholder='Password'/>
        <button>Signup</button>
        <h2>already have an account? <span>Signup</span></h2>
        <h2>------------------Or------------------</h2>
        <button>Sign up with google</button>
    </div>
  )
}

export default Signup