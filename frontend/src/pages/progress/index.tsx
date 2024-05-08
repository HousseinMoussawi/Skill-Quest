import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'


type Props = {}

const Progress = (props: Props) => {
  return (
    <div className='whole-screen flex center'> 
        <div className='progress-div'>
          <ul className='games-list flex between'>
            <li><NavLink to='asdadd'>Word Invaders</NavLink></li>
            <li><NavLink to='asdadd'>Shortcut King</NavLink></li>
            <li><NavLink to='asdadd'>English</NavLink></li>
            <li><NavLink to='/progress/'>French</NavLink></li>
          </ul>
        <div className='game-container flex'>
            <div className='mode flex column between'>
                <ul className='center flex column'>
                  <li><NavLink to='/progress/'>Beginner</NavLink></li>
                  <li><NavLink to='asdadd'>Intermediate</NavLink></li>
                  <li><NavLink to='asdadd'>Advanced</NavLink></li>
                </ul>
                <ul className='center flex column'>
                  <li><NavLink to='asdadd'>Daily challenges</NavLink></li>
                  <li><NavLink to='asdadd'>Weekly challenges</NavLink></li>
                  <li><NavLink to='asdadd'>Constest</NavLink></li>
                </ul>
                <ul className='center flex column'>
                  <li><NavLink to='asdadd'>Infinite mode</NavLink></li>
                  <li><NavLink to='asdadd'>Creator levels</NavLink></li>
                  <li></li>
                </ul>
            
            </div>
            <div className='levels-div flex column align-center'>
              <div className='stats-div flex between align-center border'>
                 <h4 className='flex center'>wddsfs</h4> 
                 <div className='border flex text-center center'>
                    <h2>1adsaa sadf</h2>
                 </div>
                 <h4>wddsfs</h4> 
                 <div className='border flex center text-center'>
                 <h2>1adsaa  sadf</h2>
                 </div>
                 <h4>wddsfs</h4> 
                 <div className='border flex center text-center'>
                 <h2>1adsaa sadf </h2>
                 </div>
              </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Progress