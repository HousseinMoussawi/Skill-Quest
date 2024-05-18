import React, { FC, MouseEventHandler } from "react";
import "./index.css";

type Props = {
  fullname: string;
  email: string;
  skills: string[];
  handleEdit: MouseEventHandler<HTMLButtonElement>;
};

const ProfileInfo: FC<Props> = ({
  email,
  fullname,
  skills,
  handleEdit,
}) => {
  return (
    <div className="profile-info flex column around align-center">
      
        <div>
          <h3>Full name</h3> <h3>{fullname}</h3>
        </div>
        <div>
          <h3>Email</h3>
          <h3>{email}</h3>
        </div>
        <div>
          <h3>Skills targeted</h3>
          <div className="profile-info-skills flex align-center">
            {skills.map((string, index) => (
              <h3 key={index}>{string}</h3>
            ))}
          </div>
        </div>
        <div>
        </div>
        <button onClick={handleEdit}>Edit</button>
      </div>
  );
};

export default ProfileInfo;
