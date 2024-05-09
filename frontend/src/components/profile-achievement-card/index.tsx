import React, { FC } from 'react'
import './index.css'
import Image from '../../assets/login-image.png'

type Props = {}

const ProfileAchievementsCard:FC<Props> = () => {
  return (
    <div className='profile-achievements-card flex align-center between'>
        <img src={Image} alt="" />
        <p>Hello how are you my most butter chicken man</p>
    </div>
  )
}

export default ProfileAchievementsCard