import React, { FC, MouseEventHandler, useState } from 'react'
import './index.css'


type Props = {
    firstFilter:string,
    secondFilter:string,
    placeHolder:string,
    thirdFilter:string,
    handleClickedFirstFilter: MouseEventHandler<HTMLDivElement>,
    handleClickedAllFilter: MouseEventHandler<HTMLDivElement>,
    handleClickedSecondFilter: MouseEventHandler<HTMLDivElement>,
    handleClickedThirdFilter: MouseEventHandler<HTMLDivElement>,
    isClicked:string,
}

const SearchBar: FC<Props> = ({firstFilter,secondFilter,thirdFilter,placeHolder,handleClickedAllFilter,handleClickedFirstFilter,handleClickedSecondFilter,handleClickedThirdFilter,isClicked}) => {
  return (
    <div className='search-bar flex between align-center '>
        <div className='filters-div flex between'>
            <h4 className={`${isClicked==='All'?'active':''}`} onClick={handleClickedAllFilter}>All</h4>
            <h4 className={`${isClicked ===firstFilter+'s'?'active':''}`} onClick={handleClickedFirstFilter}>{firstFilter}</h4>
            <h4 className={`${isClicked===secondFilter+'s'?'active':''}`} onClick={handleClickedSecondFilter}>{secondFilter}</h4>
            <h4 className={`${isClicked===thirdFilter+'s'?'active':''}`} onClick={handleClickedThirdFilter}>{thirdFilter}</h4>
            <h4></h4>
            <h4></h4>
        </div>
        <input type="text" placeholder={placeHolder} />
        <button>Search</button>
    </div>
  )
}

export default SearchBar