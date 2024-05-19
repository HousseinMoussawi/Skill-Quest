import React, { FC, useState, useEffect } from "react";
import "./index.css";
import SearchBar from "../../components/search-bar";
import RewardCard from "../../components/reward-card";
import axios from "axios";

type Props = {};

const Rewards: FC<Props> = ({}) => {
  const [clicked, setClicked] = useState<string>("");
  const [rewards, setRewards] = useState<any[]>([]);
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") as string);
  const [rewardId, setRewardId] = useState<string>("");

  const getAllRewards = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/rewards/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      setRewards(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(rewardId)
  
    
  }, [rewardId])
   

  const handleRewardPurchase = async () => {
    try {
      const response = axios.post(`http://localhost:3001/users/${user._id}/buyReward/${rewardId}`,{},
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log((await response).data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRewards();
  }, []);

  return (
    <div className="rewards flex center">
      <SearchBar
        firstFilter="Emojis"
        secondFilter="Themes"
        placeHolder="search for rewards"
        thirdFilter="Backgrounds"
        handleClickedAllFilter={() => setClicked("All")}
        handleClickedFirstFilter={() => setClicked("Emoji")}
        handleClickedSecondFilter={() => setClicked("Theme")}
        handleClickedThirdFilter={() => setClicked("Background")}
        isClicked={clicked}
      />

      <div className="rewards-div flex justify-center">
        {rewards.map((reward) => {
          if (clicked === "All" || clicked==='') {
            return (
              <RewardCard
                handleRewardPurchase={handleRewardPurchase}
                imageURL={reward.imageURL}
                price={reward.price}
                rewardName={reward.name}
                key={reward._id}
                rewardId={reward._id}
                getRewardId={(e) => setRewardId(reward._id)}
              />
            );
          }
          else if(reward.type===(clicked.toUpperCase())){
            return(
              <RewardCard
                handleRewardPurchase={handleRewardPurchase}
                imageURL={reward.imageURL}
                price={reward.price}
                rewardName={reward.name}
                rewardId={reward._id}
                key={reward._id}
                getRewardId={(e) => setRewardId(reward._id)}
              />
            )
          }
        })}
      </div>
    </div>
  );
};

export default Rewards;
