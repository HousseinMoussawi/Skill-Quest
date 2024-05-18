import React, { FC, useEffect, useState } from "react";
import "./index.css";
import CreatorCard from "../../components/creator-card";
import SearchBar from "../../components/search-bar";
import axios from "axios";

type Props = {};

const Creators: FC<Props> = ({}) => {
  const [clicked, setClicked] = useState<string>("");
  const [creators, setCreators] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  const getAllCreators = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
      setCreators(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCreators();
  }, []);

  return (
    <div className="creators flex evenly justify-center">
      <SearchBar
        firstFilter="Official Creators"
        secondFilter="Normal Creators"
        placeHolder="Search for creators"
        thirdFilter=""
        handleClickedFirstFilter={() => setClicked("Officail Creators")}
        handleClickedAllFilter={() => setClicked("All")}
        handleClickedThirdFilter={() => setClicked("All")}
        handleClickedSecondFilter={() => setClicked("Normal Creators")}
        isClicked={clicked}
      />
      {creators.map((creator) => {
        if (creator.role === "CREATOR") {
          return (
            <CreatorCard
              creatorImageURL={creator.profilePictureURL}
              creatorName={creator.username}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Creators;
