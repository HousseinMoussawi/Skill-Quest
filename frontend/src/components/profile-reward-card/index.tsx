import React, { FC } from 'react'
import './index.css'

type Props = {
  imageURL:string,
  rewardName: string,
  }

const RewardCard: FC<Props> = ({imageURL,rewardName}) => {
 

  return (
    <div className='profile-reward-card flex column relative between'>
        <img src={imageURL} alt="" />
        <div className='profile-reward-card-info flex align-center'>
          <div className='profile-reward-name flex'>
              <h5>{rewardName}</h5>
          </div>

        </div>
       
    </div>
  )
}

export default RewardCard