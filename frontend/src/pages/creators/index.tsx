import React, { FC } from 'react'
import './index.css'
import CreatorCard from '../../components/creator-card'
import SearchBar from '../../components/search-bar'


type Props = {}

const Creators:FC<Props> = ({}) => {
  return (
    <div className='creators flex evenly justify-center'>
      <SearchBar firstFilter='Official Creators' secondFilter='Normal Creators' placeHolder='Search for creators' thirdFilter='' />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
    </div>
  )
}

export default Creators