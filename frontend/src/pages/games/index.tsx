import React, { useState, useEffect } from "react";
import GameCard from "../../components/game-card";
import CreatorCard from "../../components/creator-card";
import SearchBar from "../../components/search-bar";
import RewardCard from "../../components/reward-card";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Props = {};

const Games = (props: Props) => {
  const [clicked, setClicked] = useState<string>("");
  const [games, setGames] = useState<any[]>([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getAllGames = async () => {
    try {
      const response = await axios.get("http://localhost:3001/games/", {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      localStorage.setItem("games", data);
      setGames(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(games);
  }, [games]);

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <div className="games evenly align-center flex">
      <SearchBar
        placeHolder="Search for games"
        firstFilter="Typing Games"
        secondFilter="Language Games"
        thirdFilter=""
        handleClickedFirstFilter={() => setClicked("Typing Games")}
        handleClickedAllFilter={() => setClicked("All")}
        handleClickedSecondFilter={() => setClicked("Language Games")}
        handleClickedThirdFilter={() => setClicked("All")}
        isClicked={clicked}
      />

      <div className="games-container flex evenly justify-center">
        {" "}
        {games.map((game) => (
          <GameCard 
            key={game._id}
            gameName={game.name}
            handleGameClick={() => navigate(`/games/${game._id}`)}
            imageURL={game.gameImageURL}
            skills={game.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;
