import React, { FC } from 'react'
import './index.css'

type Props = {
    handleNextClick: ()=> void,
}

const NextButton:FC<Props> = ({handleNextClick}) => {
  return (
    <div className='next-card absolute flex center'>
        <button>Next</button>
    </div>
  )
}

export default NextButton