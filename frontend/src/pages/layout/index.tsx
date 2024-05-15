import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
type Props = {
  isAuthorized:boolean,
}

const Layout: FC<Props> = ({isAuthorized}) => {
  const navigate = useNavigate()
  const [user,setUser] = useState<any>()
  const [username,setUsername] = useState<string>('')
  const [userImageURL,setUserImageURL] = useState<string>('')

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userr = localStorage.getItem('user')
    setUser(JSON.parse(localStorage.getItem("user") as string))
    console.log(user)
    if ((!isAuthorized && !token ) ||  !userr) {
      navigate('/auth');
    }
  }, [isAuthorized, navigate]);

  useEffect(()=>{

    if(user)
      setUsername(user.username)
  },[user])

  return (
    <div className='flex center column'>
        <Navbar name={
          username} imageURL="http://localhost:3001/uploads/images.jpg"/>
        <Outlet/>
    </div>
  )
}

export default Layout