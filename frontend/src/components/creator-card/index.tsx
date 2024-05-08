import React, { FC } from 'react'
import './index.css'
import Image from '../../assets/istockphoto-1333010525-612x612.jpg'

type Props = {}

const CreatorCard: FC<Props> = () => {
  return (
    <div className='creator-card flex column between'>
        <img src={Image} alt="" />
        <div className='creator-card-info flex column between align-center'>
          <div className='creator-name flex between align-center'>
              <h1>Creator Name</h1>
              <h4>10 games</h4>
          </div>
          <div className='creator-status flex align-center between'>
            <h4>Creator</h4>
            <h4>John</h4>
          </div>
        </div>
    </div>
  )
}

export default CreatorCard