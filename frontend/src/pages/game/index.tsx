import React, { FC } from 'react'
import { useState,useEffect } from 'react'
import'./index.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

type Props = {}

const Game:FC<Props> = ({}) => {
  const [userId,setUserId] = useState<string>('')
  const [gameID, setGameID] = useState<string>('');
  const [game,setGame] = useState<any>()
  const [screenShotsURL,setScreenShotsURL] = useState<string[]>([])
  const [mainImageURL,setMainImageURL] = useState<string>('')

  const user = JSON.parse(localStorage.getItem('user') as string)
  const token = localStorage.getItem('token')
  const { id: gameId } = useParams();

  console.log(token)

  useEffect(() => {

    setUserId(user._id)
    getGameById()
  }, []);

  useEffect(() => {
    console.log(gameId)
  
   
  }, [gameId])
  

  
  const getGameById = async () =>{
    try {
      const response = await axios.get(`http://localhost:3001/games/${gameId}`,
        {
          headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type":'application/json'
          }
        }
      )
      const data = response.data
      console.log(data)
      setGame(data)
      setScreenShotsURL(data.gameScreenShotsURL)
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleScreenShotClick = (value:string)=>{
    setMainImageURL(value)
  }
  console.log(gameId)

  const handleAddGameClick = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/games/${gameId}/user/${userId}`,
        {},{
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type':'application/json'
          }
        }
        
        
      )
      console.log(response.data)
      localStorage.setItem('user',JSON.stringify(response.data))

    } catch (error) {
      console.log(error)
    }
  }

  const style:React.CSSProperties = {
    backgroundImage: `url(${mainImageURL?mainImageURL:game?game.gameImageURL:''})`,
    backgroundSize: 'cover'
  }


  return (
    <div className='game flex column  align-center evenly'>
      
      <div className='game-image border relative' style={style}>
        <h1>{game? game.name:'Game Name'}</h1>
      </div>
      <div className='game-screen-shots flex align-center'>
        <div className='screen-shots-container flex align-center'>
          {screenShotsURL.map((screen,index)=>(
            <div key={index} className='screen-shot' onClick={()=>handleScreenShotClick(screen)}>
            <img src={screen} alt="" />
            </div>
          ))}
          
        </div>
      </div>
      <div className='game-description flex column evenly align-center'> 
          <h3>{game?game.description:''}</h3>
          <button onClick={handleAddGameClick}>Add This Game</button>
      </div>  
    </div>
  )
}


export default Game