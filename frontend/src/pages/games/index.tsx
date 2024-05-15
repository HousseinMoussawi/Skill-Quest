import React, { useState } from "react";
import GameCard from "../../components/game-card";
import CreatorCard from "../../components/creator-card";
import SearchBar from "../../components/search-bar";
import RewardCard from "../../components/reward-card";
import "./index.css";

type Props = {};

const Games = (props: Props) => {
  const [clicked, setClicked] = useState<string>("");

  return (
    <div className="games evenly align-center flex">
      <SearchBar
        placeHolder="Search for games"
        firstFilter="Typing Games"
        secondFilter="Language Games"
        thirdFilter=""
        handleClickedFirstFilter={()=>setClicked('Typing Games')}
        handleClickedAllFilter={()=>setClicked('All')}
        handleClickedSecondFilter={()=>setClicked("Language Games")}
        handleClickedThirdFilter={()=>setClicked('All')}
        isClicked={clicked}
      />

      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
};

export default Games;
