import React, { FC, useEffect } from "react";
import "./index.css";
import NextButton from "../../components/next-button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {};

const CreateLevel: FC<Props> = ({}) => {
  const [difficulty, setDifficulty] = useState<string>("");
  const [games, setGames] = useState<any[]>([]);
  const [text, setText] = useState<string>("");
  const [gameId, setGameId] = useState<string>("");
  const token = localStorage.getItem("token");
  const [file, setFile] = useState<any>()
  const navigate = useNavigate()
 
  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
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

  const handleDifficultyClick = (value: string) => {
    setDifficulty(value);
  };

  const createLevel = async () => {
    const wordsArray = text.split(" ");

    const formData = new FormData()
    formData.append('image',file)
    formData.append('difficulty',difficulty)
    formData.append('text',JSON.stringify(wordsArray))
    console.log(wordsArray)

    
    try {
      const response = await axios.post(
        `http://localhost:3001/games/level/${gameId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
        }
      );
      const data = response.data
      if(response.status ===200 )
        {
          navigate('/profile')
        }
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
                  <option key={game._id} value={game._id}>{game.name}</option>
                ))}
            </select>
          </div>
        </div>
        <div className="level-info-div flex around column">
          <div className="level-text flex around">
            <h2>Level text</h2>
            <textarea
              onChange={(e) => {
                setText(e.target.value);
              }}
              name=""
              id=""
              placeholder="Write the level text with one space between words"
            ></textarea>
          </div>
          <div className="upload-div flex around">
            <h2>Level Background</h2>
            <div className="upload-btn-div flex align-center">
              <label className="flex center file-input" htmlFor="image-Input">
                {" "}
                <h3>Upload a file</h3>
              </label>
              <input
                className="hidden"
                type="file"
                id="image-Input"
                onChange={(e)=>{
                  if(e.target.files)
                  setFile(e.target.files[0])}}
                name="image"
                accept="image/*"
              />
            </div>
          </div>

          <div className="difficulty-container flex around">
            <h2>Difficulty level</h2>
            <div className="difficulty-div flex between align-center">
              <h4
                onClick={() => handleDifficultyClick("BEGINNER")}
                className={`${difficulty === "BEGINNER" ? "active" : ""}`}
              >
                Beginner
              </h4>
              <h4
                onClick={() => handleDifficultyClick("INTERMEDIATE")}
                className={`${difficulty === "INTERMEDIATE" ? "active" : ""}`}
              >
                Intermediate
              </h4>
              <h4
                onClick={() => handleDifficultyClick("ADVANCED")}
                className={`${difficulty === "ADVANCED" ? "active" : ""}`}
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
