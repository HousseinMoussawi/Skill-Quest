import React from 'react'
import GameCard from '../../components/game-card'
import CreatorCard from '../../components/creator-card'
import SearchBar from '../../components/search-bar'


type Props = {}

const Games = (props: Props) => {
  return (
    <div>
      <SearchBar placeHolder='hello' firstFilter='emojis' secondFilter='themes' thirdFilter='backgrounds'/>
      <CreatorCard/>
      <GameCard/>
    </div>
  )
}

export default Games