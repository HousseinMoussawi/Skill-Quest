import  { FC, MouseEventHandler } from 'react'
import './index.css'

type Props = {
  gameName: string,
  imageURL: string,
  skills: any[],
  handleGameClick: MouseEventHandler<HTMLDivElement>
}

const GameCard: FC<Props> = ({ gameName, imageURL, skills,handleGameClick }) => {
  return (
    <div className='game-card flex column between' onClick={handleGameClick}>
      <img src={imageURL} alt="" />
      <div className='game-card-info flex column between align-center'>
        <div className='game-name flex between align-center'>
          <h1>{gameName}</h1>
          <h4></h4>
        </div>
        <div className='game-skills flex align-center between'>
          <h4>Skills</h4>
          <div className='skills-div flex between align-center'>
            {skills.map((skill,index) => (
              <h5 key={index}>{skill.name}</h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard