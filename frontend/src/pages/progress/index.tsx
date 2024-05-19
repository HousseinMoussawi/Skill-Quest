import React, { useEffect, useState } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import LevelCard from '../../components/level-card'
import axios from 'axios'



type Props = {}


const Progress = (props: Props) => {

  const [games,setGames] = useState<any[]>([])
  const [selectedGame,setSelectedGame] = useState<any>()
  const [gameLevels,setGameLevels] = useState<any[]>([])
  const [clickedMode,setCLickedMode] = useState<string>('')
  const [clickedGame,setClickedGame] = useState<string>('')
  const [gameName,setGameName] = useState<string>('')


  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user') as string)

  const getUserGames = async()=>{
    try {
      const response = await axios.get(`http://localhost:3001/users/games/${user._id}`,
        {
          headers:{
            Authorization:`Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      const data = response.data
      console.log(data)
      setGames(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserGames()
  
    
  }, [])
  
  useEffect(() => {
  console.log(games)
  setGameLevels(selectedGame?.game_levels)
    
  }, [selectedGame])
  


  return (
    <div className='whole-screen flex center'>
        <div className='progress-div'>
          <ul className='games-list flex '>
            
              {games.map((game)=>(
                <li onClick={()=>{setClickedGame(game.game_name)
                  setSelectedGame(game)
                }} className={`${clickedGame===game.game_name?'active':''} `}>{game.game_name}</li>
              ))}
            

          </ul>
        <div className='game-container flex'>
            <div className='mode flex column around'>
                <ul className='center flex column'>
                  <li onClick={()=>setCLickedMode('BEGINNER')} className={`${clickedMode==='BEGINNER'?'active':''}`}>Beginner</li>
                  <li onClick={()=>setCLickedMode('INTERMEDIATE')} className={`${clickedMode==='INTERMEDIATE'?'active':''}`}>Intermediate</li>
                  <li onClick={()=>setCLickedMode('ADVANCED')} className={`${clickedMode==='ADVANCED'?'active':''}`}>Advanced</li>
                </ul>
                <ul className='center flex column'>
                  <li>Daily challenges</li>
                  <li>Weekly challenges</li>
                  <li>Constest</li>
                </ul>
                <ul className='center flex column'>
                  <li>Infinite mode</li>
                  <li>Creator levels</li>
                  
                </ul>
            
            </div>
            <div className='levels-div flex column align-center'>
              <div className='levels-container flex column align-center'>
                {gameLevels?.filter(level => level.level_difficulty === clickedMode).
                map((level) => (
                  <LevelCard levelName={level.score} gameName={selectedGame.game_name}/>
                ))}
              </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Progress