import React from 'react'
import './index.css'
import ProfileAchievementsCard from '../profile-achievement-card'


type Props = {}

const ProfileAchievements = (props: Props) => {
  return (
    <div className='profile-achievements flex column align center between'>
      <h2>Achievements</h2>
      <div className='profile-achievements-div flex column align-center'>
        <ProfileAchievementsCard/>
        <ProfileAchievementsCard/>
        <ProfileAchievementsCard/>
        <ProfileAchievementsCard/>
      </div>
    </div>
  )
}

export default ProfileAchievements