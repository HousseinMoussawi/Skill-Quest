import React, { FC } from 'react'
import './index.css'
import Image from '../../assets/istockphoto-1333010525-612x612.jpg'

type Props = {}

const GameCard: FC<Props> = () => {
  return (
    <div className='game-card flex column between'>
        <img src={Image} alt="" />
        <div className='game-card-info flex column between align-center'>
          <div className='game-name flex between align-center'>
              <h1>Game Name</h1>
              <h4></h4>
          </div>
          <div className='game-skills flex align-center between'>
              <h4>Skills</h4>
              <div className='skills-div flex between align-center'>
                <h5>typing</h5>
                <h5>english</h5>
                <h5>coding</h5>
              </div>
          </div>
          <div className='game-creator flex align-center between'>
            <h4>Creator</h4>
            <h4>John</h4>
          </div>
        </div>
    </div>
  )
}

export default GameCard