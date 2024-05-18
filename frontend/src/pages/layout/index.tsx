import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'


type Props = {
  isAuthorized:boolean,
}

const Layout: FC<Props> = ({isAuthorized}) => {
  const navigate = useNavigate()
  const [user,setUser] = useState<any>()
  const [username,setUsername] = useState<string>('')
  const [userImageURL,setUserImageURL] = useState<string>('')
  const token = localStorage.getItem('token');

  const authorize = async () => {
    try {
        const response = await axios.get('http://localhost:3001/users/authorize',{
          headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type":'application/json'
          }
        })
          if(response.status === 200)
            {
              console.log('authorized')
            }
    } catch (error) {
      localStorage.clear()
      navigate('/auth')
      console.log(error)
    } 
  }

  useEffect(() => {
    authorize()
    setUser(JSON.parse(localStorage.getItem("user") as string));
    
  }, [isAuthorized, navigate]);



  useEffect(()=>{

    if(user){
      setUsername(user.username)
      setUserImageURL(user.profilePictureURL)
    }
      
  },[user])

  return (
    <div className='flex center column'>
        <Navbar name={
          username} imageURL={userImageURL}/>
        <Outlet/>
    </div>
  )
}

export default Layout