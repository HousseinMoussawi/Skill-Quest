import React, { useEffect } from "react";
import GameScreenCard from "../../components/game-screen-card";
import "./index.css";
import Phaser from "phaser";

type Props = {};

const TypingGame = (props: Props) => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.WEBGL,
      parent: "canvas",
      width: "99%",
      height: "99%",
      scene:{
        preload:preload,
        create:create,
        update:update,
      },
      physics:{
        default:'arcade',
        arcade:{
            gravity:{ x: 0, y: 0 } 
        }
      }
    };

    new Phaser.Game(config);
  }, []);

  return (
    <div className="typing-game flex center ">
      <GameScreenCard />
    </div>
  );
};

export default TypingGame;
