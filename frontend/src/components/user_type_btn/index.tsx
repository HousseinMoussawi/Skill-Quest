import React, { FC, MouseEventHandler } from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

type Props = {
    opposite:string,
    user: string,
    auth:string,
    location:string
}


const UserType: FC <Props>= ({opposite,user,auth,location}) => {

const navigate = useNavigate();

const changeUserHandler:MouseEventHandler<HTMLButtonElement> = () => {
     navigate(location)
}

  return (
    <div className='user-type flex center'>
        <h4>Not a {opposite}?</h4>
        <button onClick={changeUserHandler}>{user} {auth}</button>
    </div>
  )
}

export default UserType