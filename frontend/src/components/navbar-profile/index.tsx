import React, { FC, useState } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";


type Props = {
  name: string;
  imageURl: string;
};

const NavbarProfile: FC<Props> = ({ name, imageURl }) => {
  const [hidden, setHidden] = useState<boolean>(true);

  const toggleList = () => {
    setHidden(!hidden);
  };

  return (
    <div className="profile-div flex column">
      <div className=" navbar-profile flex center " onClick={toggleList}>
        <div className="navbar-profile-image border">
          <img src={imageURl} alt="" className="" />
        </div>
        <h4>{name}</h4>
      
      </div>
      <div className="list-wrapper">
        <ul className={`list flex center border column ${hidden ? "hidden" : ""}`}>
          <li className="flex center">
            <NavLink to="/">Profile</NavLink>
          </li>
          <li className="flex center">
            <NavLink to="/player-achievements">Achievements</NavLink>
          </li>
          <li className="flex center">Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarProfile;
