import React from 'react'
import GameCard from '../../components/game-card'
import CreatorCard from '../../components/creator-card'

type Props = {}

const Games = (props: Props) => {
  return (
    <div>
      <CreatorCard/>
      <GameCard/>
    </div>
  )
}

export default Games