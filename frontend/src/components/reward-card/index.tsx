import React, { FC } from 'react'
import './index.css'
import Image from '../../assets/istockphoto-1333010525-612x612.jpg'

type Props = {}

const RewardCard: FC<Props> = () => {
  return (
    <div className='reward-card flex column relative between'>
        <img src={Image} alt="" />
        <div className='reward-card-info flex column between align-center'>
          <div className='reward-name flex between align-center'>
              <h2>Game Name</h2>
              <h4>Price</h4>
          </div>

        </div>
        <div className='buy-div flex center absolute'>
                <button>Buy</button>
          </div>
    </div>
  )
}

export default RewardCard