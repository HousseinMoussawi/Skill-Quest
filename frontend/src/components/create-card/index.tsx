import React, { FC, useState } from 'react'
import './index.css'

type Props = {
    type:string,
    text:string,
    handleCreateClick: () => void,
    isSelected:boolean,
}

const CreateCard:FC<Props> = ({type,text,handleCreateClick,isSelected}) => {

  return (
    <div className={`create-card flex between align-center column ${isSelected? 'active' :''}`} onClick={handleCreateClick}>
        <h1>{type}</h1>
        <p>{text}</p>
        <p></p>
    </div>
  )
}

export default CreateCard