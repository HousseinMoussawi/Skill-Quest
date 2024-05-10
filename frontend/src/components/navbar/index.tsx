import React, { FC } from "react";
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

  const navigate = useNavigate()

  const handleLogoClick =() => {
    navigate('/')
  }

  return (
    <div className="navbar flex evenly ">
      <img src={Logo} alt="" onClick={handleLogoClick} className="logo"/>
      <ul className="navbar-list flex evenly center">
        <li>
          <NavLink to="/games">Games</NavLink>
        </li>
        <li>
          <NavLink to="/progress">Progress</NavLink>
        </li>
        <li>
          <NavLink to="/creators">Creators</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create</NavLink>
        </li>
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
