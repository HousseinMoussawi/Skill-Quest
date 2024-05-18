import React, { FC } from "react";
import './index.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
type Props = {
  levelName: string,
  gameName:string,
};

const LevelCard: FC<Props> = ({ levelName,gameName}) => {
    const [error,setError] = useState<string>('')
    const navigate =useNavigate()

const handleLevelClick = () => {
    if(gameName === 'Blocky Tower')
      navigate('/NewGame')
    else{
      
      navigate('/TypingInvaders')
    }
   
}

  return (
    <div className="level-card flex between align-center border">
      <h1>{levelName}</h1>
      <button onClick={handleLevelClick}>
        Play
      </button>
    </div>
  );
};

export default LevelCard;
