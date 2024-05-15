import React, { FC, useState } from "react";
import "./index.css";
import SearchBar from "../../components/search-bar";
import RewardCard from "../../components/reward-card";

type Props = {};

const Rewards: FC<Props> = ({}) => {
  const [clicked, setClicked] = useState<string>("");

  return (
    <div className="rewards flex center">
      <SearchBar
        firstFilter="Emojis"
        secondFilter="Themes"
        placeHolder="search for rewards"
        thirdFilter="Backgrounds"
        handleClickedAllFilter={() => setClicked("All")}
        handleClickedFirstFilter={() => setClicked("Emojis")}
        handleClickedSecondFilter={() => setClicked("Themes")}
        handleClickedThirdFilter={() => setClicked("Backgrounds")}
        isClicked={clicked}
      />
      <RewardCard />
      <RewardCard />
      <RewardCard />
      <RewardCard />
      <RewardCard />
      <RewardCard />
      <RewardCard />
      <RewardCard />
      <RewardCard />
    </div>
  );
};

export default Rewards;
