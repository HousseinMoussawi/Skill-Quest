import React from "react";
import "./index.css";
import ProfileAchievements from "../../components/profile-achievements";
import ProfileImage from "../../components/profile-image";
import ProfileInfo from "../../components/profile-info";
import PlayerGames from "../../components/player-games";
import CreatorGames from "../../components/creator-games";
import Image from "../../assets/login-image.png";

type Props = {};

const PlayerProfile = (props: Props) => {
  return (
    <div className="profile flex between">
      <div className="left-div flex column between">
        <ProfileImage imageURL={Image} name="Houssein" />
        <ProfileAchievements />
      </div>
      <div className="right-div flex column between">
        <ProfileInfo
          email="houssein@gmail.com"
          fullname="Houssein Moussawi"
          favorite="Typing game"
          skills={["typing", "english", "coding"]}
        />
        <PlayerGames />
      </div>
      
    </div>
  );
};

export default PlayerProfile;
