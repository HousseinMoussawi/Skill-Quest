import React from 'react'
import GameCard from '../../components/game-card'
import CreatorCard from '../../components/creator-card'
import SearchBar from '../../components/search-bar'
import RewardCard from '../../components/reward-card'
import './index.css'

type Props = {}

const Games = (props: Props) => {
  return (
    <div className='games center flex'>
      <SearchBar placeHolder='Search for games' firstFilter='Official games' secondFilter='Creator games' thirdFilter=''/>
      
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
      <GameCard/>
    </div>
  )
}

export default Games