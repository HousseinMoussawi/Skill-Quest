import React, { useState, useEffect } from "react";
import "./index.css";
import ProfileAchievements from "../../components/profile-achievements";
import ProfileImage from "../../components/profile-image";
import ProfileInfo from "../../components/profile-info";
import ProfileGames from "../../components/profile-games";
import ProfileUpdatePopup from "../../components/profile-update-popup";
import axios from "axios";

type Props = {};

const Profile = (props: Props) => {
  const [hidden, setHidden] = useState<boolean>(true);
  const [user, setUser] = useState<any>();
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [profilePictureURL, setProfilePictureURL] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newUsername, setNewUsername] = useState<string>("");
  const [newFullName, setNewFullName] = useState<string>("");
  const [newSkills, setNewSkills] = useState<string>();
  const [newFile, setNewFile] = useState<File>();
  const token = localStorage.getItem('token')


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as string));
    console.log(user);
  }, []);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setSkills(user.skills);
      setFullname(user.fullName);
      setProfilePictureURL(user.profilePictureURL);
    }
  }, [user]);



  const updateUserInfo = async () =>{

    const skillsArray = newSkills?.split(" ");
    const formData = new FormData()
    formData.append('username',newUsername)
    formData.append('email',newEmail)
    formData.append('fullName',newFullName)
    if (newFile) {
      formData.append('image', newFile)
    }
    formData.append('skills',JSON.stringify(skillsArray))


    try {

      const response = await axios.put(`http://localhost:3001/users/${user._id}`,formData,
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'multipart/form-data'
          }
        }
      )
      const data = response.data

      setUsername(data.username)
      setEmail(data.email)
      setFullname(data.fullName)
      setProfilePictureURL(data.profilePictureURL)
      setSkills(data.skills)
      
    } catch (error) {
      console.log(error)
    }
 

  }
  


  const handleUpdate = () => {
    console.log(hidden);
    setHidden(!hidden);
    console.log(newFile)
    updateUserInfo()
  };

  return (
    <div className="profile relative flex between">
      <div className="left-div flex column between">
        <ProfileImage imageURL={profilePictureURL} name={username} />
        <ProfileAchievements />
      </div>
      <div className="right-div flex column between">
        <ProfileInfo
          email={email}
          fullname={fullname}
          skills={skills}
          handleEdit={()=>setHidden(!hidden)}
        />
        <ProfileGames />
      </div>
      <ProfileUpdatePopup
        Popup={hidden}
        handleUpdate={handleUpdate}
        handleEmailChange={(e)=>setNewEmail(e.target.value)}
        handleFullNameChange={(e)=>setNewFullName(e.target.value)}
        handleProfileImageChange={setNewFile}
        handleSkillsChange={(e)=>setNewSkills(e.target.value)}
        handleUsernameChange={(e)=>setNewUsername(e.target.value)}
      />
    </div>
  );
};

export default Profile;
