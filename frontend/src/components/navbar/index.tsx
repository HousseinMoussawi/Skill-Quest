import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
type Props = {}

const Navbar: FC<Props> = () => {

  
  return (
    <div>
      <ul>
        <li><NavLink to='/games'>Games</NavLink></li>
        <li><NavLink to='/progress'>Progress</NavLink></li>
        <li><NavLink to='/creators'>Creators</NavLink></li>
        <li><NavLink to='/create'>Create</NavLink></li>
        <li><NavLink to='/rewards'>Rewards</NavLink></li>
        
      </ul>
    </div>
  )
}

export default Navbar