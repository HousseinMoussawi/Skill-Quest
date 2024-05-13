import React, { FC } from 'react'
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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!isAuthorized && !token) {
      navigate('/auth');
    }
  }, [isAuthorized, navigate]);

  return (
    <div className='flex center column'>
        <Navbar name="Houssein" imageURL="aadqqdaw"/>
        <Outlet/>
    </div>
  )
}

export default Layout