import React, { FC } from 'react'
import './index.css'

type Props = {
    type:string,
    text:string,
}

const CreateCard:FC<Props> = ({type,text}) => {
  return (
    <div className='create-card flex between align-center column border'>
        <h1>{type}</h1>
        <p>{text}</p>
        <p></p>
    </div>
  )
}

export default CreateCard