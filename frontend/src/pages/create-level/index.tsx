import React, { FC, useEffect } from "react";
import "./index.css";
import NextButton from "../../components/next-button";
import { useState } from "react";
import axios from "axios";

type Props = {};

const CreateLevel: FC<Props> = ({}) => {
  const [difficulty, setDifficulty] = useState<string>("");
  const [games, setGames] = useState<any[]>([]);
  const [text,setText] = useState<string>('')
  const [gameId, setGameId] = useState<string>("");

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:3001/games", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };


 
  const asdasd = () => {};

  return (
    <div className="create-level flex center">
      <div className="create-level-div flex column ">
        <div className="game-select-div flex align-center around">
          <h1>Game</h1>
          <div className="select-wrapper">
            <select
              name="Game Name"
              id=""
              title="Game"
              onChange={(e) => setGameId(e.target.value)}
            >
              <option value="">Select Game</option>
              {games.length > 0 &&
                games.map((game) => (
                  <option value={game._id}>
                    {game.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="level-info-div flex around column">
          <div className="level-text flex around">
            <h2>Level text</h2>
            <textarea
            onChange={}
              name=""
              id=""
              placeholder="Write the level text with one space between words"
            ></textarea>
          </div>
          <div className="upload-div flex around">
            <h2>Level Background</h2>
            <div className="upload-btn-div flex align-center">
              <h3>Upload a file</h3>
            </div>
          </div>

          <div className="difficulty-container flex around">
            <h2>Difficulty level</h2>
            <div className="difficulty-div flex between align-center">
              <h4
                onClick={() => handleDifficultyClick("beginner")}
                className={`${difficulty === "beginner" ? "active" : ""}`}
              >
                Beginner
              </h4>
              <h4
                onClick={() => handleDifficultyClick("intermediate")}
                className={`${difficulty === "intermediate" ? "active" : ""}`}
              >
                Intermediate
              </h4>
              <h4
                onClick={() => handleDifficultyClick("advanced")}
                className={`${difficulty === "advanced" ? "active" : ""}`}
              >
                Advanced
              </h4>
            </div>
          </div>
        </div>
      </div>
      <NextButton handleNextClick={createLevel} />
    </div>
  );
};

export default CreateLevel;
