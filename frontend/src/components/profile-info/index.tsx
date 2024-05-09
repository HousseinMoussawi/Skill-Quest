import React, { FC } from "react";
import "./index.css";

type Props = {
  fullname: string;
  email: string;
  skills: string[];
  favorite: string;
};

const ProfileInfo: FC<Props> = ({ email, favorite, fullname, skills }) => {
  return (
    <div className="profile-info flex">
      <div className="profile-info-titles flex column between">
        <h3>Full name</h3>
        <h3>Email</h3>
        <h3>Skills targeted</h3>
        <h3>Best game</h3>
        <button>Edit</button>
      </div>
      <div className="profile-info-values flex column between">
        <h3>{fullname}</h3>
        <h3>{email}</h3>
        <div className="profile-info-skills flex between">
          {skills.map((string, index) => (
            <h3 key={index}>{string}</h3>
          ))}
        </div>
        <h3>{favorite}</h3>
        <div className="empty-div"></div>
      </div>
    </div>
  );
};

export default ProfileInfo;
