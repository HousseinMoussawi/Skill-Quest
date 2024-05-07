import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'


type Props = {}

const Progress = (props: Props) => {
  return (
    <div className='whole-screen border flex center'> 
        <div className='progress-div border'>
          <ul className='games-list flex evenly'>
            <li><NavLink to='asdadd'>asdasd</NavLink></li>
            <li><NavLink to='asdadd'>asdasd</NavLink></li>
            <li><NavLink to='asdadd'>asdasd</NavLink></li>
            <li><NavLink to='asdadd'>asdasd</NavLink></li>
          </ul>
        <div className='game-container border flex'>
            <div className='mode flex column evenly border'>
                <ul className='center flex column'>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                </ul>
                <ul className='center flex column'>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                </ul>
                <ul className='center flex column'>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                  <li><NavLink to='asdadd'>asdasd</NavLink></li>
                </ul>
            
            </div>
            <div className='levels-div border'>

            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Progress