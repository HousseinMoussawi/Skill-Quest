import React, { useEffect, useRef, useState } from "react";
import GameScreenCard from "../../components/game-screen-card";
import "./index.css";
import Config from './new-game'


type Props = {};
const NewGame = (props: Props) => {

  React.useEffect(() => {
    const game = new Phaser.Game(Config);
    
    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="typing-game flex justify-center flex column align-center">
      <h1>Blocky Towers</h1>
      <GameScreenCard />
    </div>
  );
};

export default NewGame;
  