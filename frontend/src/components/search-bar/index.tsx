import React, { FC } from 'react'
import './index.css'


type Props = {
    firstFilter:string,
    secondFilter:string,
    placeHolder:string,
    thirdFilter:string,
}

const SearchBar: FC<Props> = ({firstFilter,secondFilter,thirdFilter,placeHolder}) => {
  return (
    <div className='search-bar flex between align-center '>
        <div className='filters-div flex around'>
            <h4 className='active'>All</h4>
            <h4>{firstFilter}</h4>
            <h4>{secondFilter}</h4>
            <h4>{thirdFilter}</h4>
        </div>
        <input type="text" placeholder={placeHolder} />
        <button>Search</button>
    </div>
  )
}

export default SearchBar