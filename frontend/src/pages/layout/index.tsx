import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
type Props = {
  isAuthorized:boolean,
}

const Layout: FC<Props> = ({isAuthorized}) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/auth');
    }
  }, [isAuthorized, navigate]);

  return (
    <div>
        <Navbar name="Houssein" imageURL="aadqqdaw"/>
        <Outlet/>
    </div>
  )
}

export default Layout