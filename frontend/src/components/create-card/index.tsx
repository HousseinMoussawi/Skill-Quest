import React, { FC } from 'react'

type Props = {
    type:string,
    text:string,
}

const CreateCard:FC<Props> = ({type,text}) => {
  return (
    <div className='create-card flex center column border'>
        <h1>{type}</h1>
        <p>{text}</p>
    </div>
  )
}

export default CreateCard