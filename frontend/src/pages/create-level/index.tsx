import React from 'react'
import './index.css'
import NextButton from '../../components/next-button'

type Props = {}

const CreateLevel = (props: Props) => {


  const asdasd=() => {}

  return (
    <div className='create-level flex center'>
      <div className='create-level-div flex column '>
        <div className='game-select-div flex align-center around'>
            <h1>Game</h1>
            <div className='select-wrapper'>
              <select name="" id=""  title='Game'>
                <option value="">Typing game</option>
                <option value="">ssdfsd</option>
                <option value="">ssdfsd</option>
                <option value="">ssdfsd</option>
              </select>
            </div>
        </div>
        <div className='level-info-div flex around column'>
          <div className='level-text flex around'>
            <h2>Level text</h2>
            <textarea name="" id="" placeholder='Write the level text with one space between words'></textarea>
          </div>
          <div className='upload-div flex around'>
              <h2>Level Background</h2>
            <div className='upload-btn-div flex align-center'>
              <h3>Upload a file</h3>
              </div>
          </div>

          <div className='difficulty-container flex around' >
            <h2>Difficulty level</h2>
            <div className='difficulty-div flex between align-center'>
              <h4>Beginner</h4>
              <h4>Intermediate</h4>
              <h4>Advanced</h4>

            </div>
          </div>

        </div>
      </div>
      <NextButton handleNextClick={asdasd}/>
    </div>
  )
}

export default CreateLevel