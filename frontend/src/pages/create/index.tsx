import React, { FC } from 'react'
import './index.css'
import CreateCard from '../../components/create-card'


type Props = {}

const Create:FC<Props> = () => {
  return (
    <div className='create flex align-center around relative'>
      <CreateCard type='Game' text='Start building your own game world! Design your game, define rules, and create challenges for players.'/>
      <CreateCard type='Level' text='Bring your ideas to life by designing exciting levels! Set objectives, add challenging goals, and make it fun for players to explore.'/>
    </div>
  )
}

export default Create