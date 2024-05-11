import React from 'react'
import GameScreenCard from '../../components/game-screen-card'
import './index.css'
import Phaser from 'phaser'

type Props = {}

const TypingGame = (props: Props) => {

    
    const config = {
        type:Phaser.WEBGL,

    }

  return (
    <div className='typing-game flex center '>
        <GameScreenCard/>
    </div>
  )
}

export default TypingGame