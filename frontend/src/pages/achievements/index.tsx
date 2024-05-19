import React from 'react'
import AchievementCard from '../../components/achievement-card'
import './index.css'

type Props = {}

const Achievements = (props: Props) => {
  return (
    <div className='achievements flex center'>
      <div className='achievements-div flex evenly'>
      <AchievementCard info='dadadasd a dadwdawdaw dadawda2' source='http://localhost:3001/uploads/images.jpg'/>
      
      </div>
    </div>
  )
}

export default Achievements