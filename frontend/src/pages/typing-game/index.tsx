import React, { useEffect, useRef, useState } from "react";
import GameScreenCard from "../../components/game-screen-card";
import "./index.css";
import Config from './typing-game'


type Props = {};
const TypingGame = (props: Props) => {

  React.useEffect(() => {
    const game = new Phaser.Game(Config);
    
    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="typing-game flex justify-center ">
      <GameScreenCard />
    </div>
  );
};

export default TypingGame;
  