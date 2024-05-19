import React, { useEffect, useState } from 'react'
import './index.css'
import ProfileAchievementsCard from '../profile-achievement-card'
import axios from 'axios'


type Props = {}

const ProfileAchievements = (props: Props) => {
   const [achievements,setAchievements] = useState<any[]>([])
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('usere') as string)

   
   const getAllAchievements = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/topAchievements/${user._id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'application/json'
          }
        }
      )
      setAchievements(response.data)
   }
     catch (error) {
      console.log(error)
    }
  }


   useEffect(() => {
   getAllAchievements()
    
   }, [])
   

  return (

    <div className='profile-achievements flex column align center between'>
      <h2>Achievements</h2>
      <div className='profile-achievements-div flex column align-center'>
        {achievements.map((achievement)=>(
          <ProfileAchievementsCard achievementDescription={achievement.achievement_description }  achievementImageURL={achievement.achievement_image_url}/>
        ))}
      </div>
    </div>
  )
}

export default ProfileAchievements