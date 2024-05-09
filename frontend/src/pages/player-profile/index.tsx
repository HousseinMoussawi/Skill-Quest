import React from 'react'
import './index.css'
import ProfileAchievements from '../../components/profile-achievements'
import ProfileImage from '../../components/profile-image'
import ProfileInfo from '../../components/profile-info'
import PlayerGames from '../../components/player-games'
import CreatorGames from '../../components/creator-games'
import Image from '../../assets/login-image.png'


type Props = {}

const PlayerProfile = (props: Props) => {
  return (
    <div>
      <ProfileImage imageURL={Image} name='Houssein'/>
      <ProfileInfo/>
      <ProfileAchievements/>
      <PlayerGames/>
      <CreatorGames/>
    </div>
  )
}

export default PlayerProfile