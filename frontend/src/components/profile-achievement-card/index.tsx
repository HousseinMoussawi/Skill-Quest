import React, { FC } from 'react'
import './index.css'
import Image from '../../assets/login-image.png'

type Props = {
  achievementImageURL:string,
  achievementDescription:string,
}

const ProfileAchievementsCard:FC<Props> = ({achievementDescription,achievementImageURL}) => {
  return (
    <div className='profile-achievements-card flex align-center between'>
        <img src={achievementImageURL} alt="" />
        <p>{achievementDescription}</p>
    </div>
  )
}

export default ProfileAchievementsCard