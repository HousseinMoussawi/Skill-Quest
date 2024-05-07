import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import NavbarProfile from "../navbar-profile";
import './index.css'
import Logo from '../../assets/final_logo.svg'

type Props = {
  name: string;
  imageURL: string;
};

const Navbar: FC<Props> = ({name,imageURL}) => {
  return (
    <div className="navbar flex evenly ">
      <img src={Logo} alt="" />
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
          <NavLink to="/create-game">Create</NavLink>
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
