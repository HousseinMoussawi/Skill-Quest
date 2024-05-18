import React, { FC, useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import RewardCard from '../profile-reward-card'



type Props = {
    
}

const ProfileGames:FC<Props> = ({}) => {

  const [rewards,setRewards] = useState<any[]>([])
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user') as string)

   
   const getAllRewards = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${user._id}/rewards`,
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'application/json'
          }
        }
      )
      setRewards(response.data)
   }
     catch (error) {
      console.log(error)
    }
  }

   useEffect(() => {
   getAllRewards()
   }, [])
   

  return (
    <div className='profile-games flex between'>
      {rewards.map((reward) =>(
        <RewardCard key={reward.reward_id}  imageURL={reward.reward_image_url} rewardName={reward.reward_name}/>
      ))}
    </div>
  )
}

export default ProfileGames