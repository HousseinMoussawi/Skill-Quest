import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
type Props = {
  status: string;
  levelName: string,
  gameName: string,
  levelId: string,
};

const LevelCard: FC<Props> = ({ status, levelName, gameName, levelId }) => {
    const [error,setError] = useState<string>('')
    const navigate =useNavigate()

const handleLevelClick = () => {
    if (status === 'LOCKED'){
        setError('Clear the previous levels')
    }
    else{
        navigate(`game/${gameName}/level/${levelId}`)
    }
}

  return (
    <div className="level-card flex between">
      <h1>{levelName}</h1>
      <button onClick={handleLevelClick}>
        {status === "UNLOCKED"
          ? "Play"
          : status === "LOCKED"
          ? "Locked"
          : status === "COMPLETE"
          ? "Restart"
          : ""}
      </button>
    </div>
  );
};

export default LevelCard;
