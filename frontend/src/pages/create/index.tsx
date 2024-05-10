import React, { FC, useState } from 'react'
import './index.css'
import CreateCard from '../../components/create-card'
import NextButton from '../../components/next-button'
import { useNavigate } from 'react-router-dom'


type Props = {}

const Create: FC<Props> = () => {
  const [selectedDiv,setSelectedDiv] = useState<string>('')

  const navigate = useNavigate()

  const handleDivClick = (a: string):void => {
    setSelectedDiv(a);
  };

  const handleNextButtonClick = () => {
    if (selectedDiv === 'game') {
      navigate('/create-game')
    } else if (selectedDiv === 'level') {
      navigate('/create-level')
    } else {
      console.error('Please select a div before proceeding');
    }
  };

  return (
    <div className='create flex align-center around relative'>
      <CreateCard type='Game' text='Start building your own game world! Design your game, define rules, and create challenges for players.' handleCreateClick={() => handleDivClick('game')} isSelected={selectedDiv === 'game'}/>
      <CreateCard type='Level' text='Bring your ideas to life by designing exciting levels! Set objectives, add challenging goals, and make it fun for players to explore.' handleCreateClick={() => handleDivClick('level')} isSelected={selectedDiv === 'level'}/>
      <NextButton handleNextClick={handleNextButtonClick}/>
    </div>
  )
}

export default Create