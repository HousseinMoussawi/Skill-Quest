import React, { FC, useState } from 'react'
import './index.css'
import CreatorCard from '../../components/creator-card'
import SearchBar from '../../components/search-bar'


type Props = {}

const Creators:FC<Props> = ({}) => {
  const[clicked,setClicked] = useState<string>("")

  return (
    <div className='creators flex evenly justify-center'>
      <SearchBar firstFilter='Official Creators' secondFilter='Normal Creators' placeHolder='Search for creators' thirdFilter='' handleClickedFirstFilter={()=>setClicked('Officail Creators')} handleClickedAllFilter={()=>setClicked('All')} handleClickedThirdFilter={()=>setClicked('All')} handleClickedSecondFilter={()=>setClicked('Normal Creators')} isClicked={clicked}/>
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