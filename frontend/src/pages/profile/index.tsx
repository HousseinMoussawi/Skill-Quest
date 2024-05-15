import React, { useState,useEffect } from "react";
import "./index.css";
import ProfileAchievements from "../../components/profile-achievements";
import ProfileImage from "../../components/profile-image";
import ProfileInfo from "../../components/profile-info";
import ProfileGames from "../../components/profile-games";
import ProfileUpdatePopup from "../../components/profile-update-popup";

type Props = {};

const Profile = (props: Props) => {
 
  const [hidden,setHidden] = useState<boolean>(true)
  const [user,setUser] = useState<any>()
  const [username,setUsername] = useState<string>('')
  const [fullname,setFullname] = useState<string>('')
  const [skills,setSkills] =useState<string[]>([])
  const [email,setEmail] = useState<string>('')
  const [favoriteGame,setFavoriteGame] = useState<any>()
  const [favoriteGameName,setFavoriteGameName] = useState<string>('')
  const [profilePictureURL,setProfilePictureURL] = useState<string>('')

  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as string))
    console.log(user)
    
  }, []);

  useEffect(()=>{

    if(user){

    setUsername(user.username)
    setEmail(user.email)
    setSkills(user.skills)
    setFullname(user.fullName)
    setFavoriteGame(user.favoriteGame)
    setProfilePictureURL(user.profilePictureURL)
    }
  },[user])

  useEffect(() => {
   
    if(favoriteGame){
      setFavoriteGameName(favoriteGame.name)
    }

  }, [favoriteGame])
  
  
  const handleUpdate = () => {
    console.log(hidden)
    setHidden(!hidden)
  }
 
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
          favorite={favoriteGameName}
          skills={skills}
          handleEdit={handleUpdate}
        />
        <ProfileGames user="PLAYER"/>
      </div>
      <ProfileUpdatePopup Popup={hidden} handleUpdate={handleUpdate}/>
    </div>
  );
};

export default Profile;
