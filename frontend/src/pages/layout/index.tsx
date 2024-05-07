import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div>
        <Navbar name="Houssein" imageURL="aadqqdaw"/>
        <Outlet/>
    </div>
  )
}

export default Layout