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
    console.log(hidden)
  };

  return (
    <div className="profile-div flex column">
      <div className=" navbar-profile flex center " onClick={toggleList}>
        <div className="navbar-profile-image border">
          <img src={imageURl} alt="" className="border" />
        </div>
        <h4>{name}</h4>
      </div>
      <div className="list-wrapper">
        <ul className={`list flex center column ${hidden ? "hidden" : ""}`}>
          <li>
            <NavLink to="/auth/">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/player-achievements">Achievements</NavLink>
          </li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarProfile;
