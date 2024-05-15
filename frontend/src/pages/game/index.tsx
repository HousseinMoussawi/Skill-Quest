import React, { FC } from 'react'
import'./index.css'

type Props = {}

const Game:FC<Props> = ({}) => {
  return (
    <div className='game flex column border align-center evenly'>
      <div className='game-image border'>
        <img src="http://localhost:3001/uploads/typinginvaders.png" alt="" />
      </div>
      <div className='game-screen-shots flex align-center'>
        <div className='screen-shots-container flex align-center'>
          <div className='screen-shot'>
            <img src="http://localhost:3001/uploads/typinginvaders.png" alt="" />
            </div>
          <div className='screen-shot'>
            <img src="http://localhost:3001/uploads/typinginvaders.png" alt="" />
            </div>
          <div className='screen-shot'>
            <img src="http://localhost:3001/uploads/typinginvaders.png" alt="" />
            </div>
          <div className='screen-shot'>
            <img src="http://localhost:3001/uploads/typinginvaders.png" alt="" />
            </div>
        </div>
      </div>
      <div className='game-description flex column evenly align-center'> 
          <h3>this is a description of the game</h3>
          <button>Add This Game</button>
      </div>  
    </div>
  )
}

export default Game