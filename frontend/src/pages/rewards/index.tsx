import React, { FC } from 'react'
import './index.css'
import SearchBar from '../../components/search-bar'
import RewardCard from '../../components/reward-card'

type Props = {

}

const Rewards:FC<Props> = ({}) => {
  return (
    <div className='rewards flex center'>
      <SearchBar firstFilter='Emojis' secondFilter='Themes' placeHolder='search for rewards' thirdFilter='Backgrounds'/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
      <RewardCard/>
    </div>
  )
}

export default Rewards