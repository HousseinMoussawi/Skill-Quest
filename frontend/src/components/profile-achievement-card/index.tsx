import React, { FC } from 'react'
import './index.css'
import Image from '../../assets/login-image.png'

type Props = {}

const ProfileAchievementsCard:FC<Props> = () => {
  return (
    <div className='profile-achievements-card flex align-center between'>
        <img src={Image} alt="" />
        <p>jafjasdfjhashasdhasdfasdf as asdfasf asf hsadfhjasd</p>
    </div>
  )
}

export default ProfileAchievementsCard