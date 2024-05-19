import React, { FC, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavbarProfile from "../navbar-profile";
import './index.css'
import Logo from '../../assets/final_logo.png'
import { useNavigate } from "react-router-dom";


type Props = {
  name: string;
  imageURL: string;
};



const Navbar: FC<Props> = ({name,imageURL}) => {
  const [user,setUser] = useState<any>(null);
  const [role,setRole] = useState<string>('');

  const navigate = useNavigate();

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user') as string));
  },[]);

  useEffect(()=>{
    if (user) {
      setRole(user.role);
    }
  },[user]);

  const handleLogoClick =() => {
    navigate('/');
  };

  return (
    <div className="navbar flex between">
      <img src={Logo} alt="" onClick={handleLogoClick} className="logo"/>
      <ul className="navbar-list flex evenly center">
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        {role === 'PLAYER' && <li>
          <NavLink to="/progress">Progress</NavLink>
        </li>}
        <li>
          <NavLink to="/creators">Creators</NavLink>
        </li>
        { role === 'CREATOR' && <li>
          <NavLink to="/create">Create</NavLink>
        </li>}
        <li>
          <NavLink to="/rewards">Rewards</NavLink>
        </li>
      </ul>
        <div className="">
          <NavbarProfile name={name} imageURl={imageURL} />
        </div>
    </div>
  );
};

export default Navbar;
