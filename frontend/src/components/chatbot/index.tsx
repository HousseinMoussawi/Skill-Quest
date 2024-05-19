import React, { FC, useState } from "react";
import "./index.css";
import axios from "axios";

type Props = {};

const Chatbot: FC<Props> = ({}) => {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>("");
  const [question,setQuestion] = useState<string>('')
  const token = localStorage.getItem('token')

  const handleFocus = () => {
    setIsInputFocused(!isInputFocused);
  };

 

  const handleQuestion = async () => {
    const prompt = question
    try {
      const response = await axios.post('http://localhost:3001/chatbot/',{prompt},
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'application/json'
          }
        }
      )

      setAnswer(response.data)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chatbot flex column align-center">
      {isInputFocused && (
        <div className="answer-div ">
          <p>{answer}</p>
        </div>
      )}
      <div className="">
        <input
          type="text"
          placeholder="What's on your mind?"
          onFocus={handleFocus}
          onChange={(e)=>setQuestion(e.target.value)}
        />
        <button onClick={handleQuestion}>Ask chatbot</button>
      </div>
    </div>
  );
};

export default Chatbot;
