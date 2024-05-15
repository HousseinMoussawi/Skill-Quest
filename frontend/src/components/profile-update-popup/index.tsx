import React, { FC, MouseEventHandler, useState } from 'react'
import './index.css'

type Props = {
    Popup:boolean,
    handleUpdate:MouseEventHandler<HTMLButtonElement>
}

const ProfileUpdatePopup:FC<Props> = ({Popup,handleUpdate}) => {
    const[file,setFile] = useState<any>()

  return (
    <div className={`profile-update-popup border absolute flex column between align-center ${Popup?'hidden':''}`} >
        <div>
            <h3>Full name</h3>
            <input type="text" placeholder='New full name'/>
            </div>

        <div>
            <h3>Email</h3>
            <input type="text" placeholder='New email'/>

        </div>

        <div>
            <h3>Skills</h3>
            <input type="text" placeholder='New skills separated by spaces'/>
        </div>

        <div>
            <h3>Best game</h3>
            <input type="text" placeholder='New Best game'/>
        </div>

        <div>
            <h3>Username</h3>
            <input type="text" placeholder='New Username'/>
        </div>

        <div>
            <h3>Profile image</h3>
            <input type="file" accept='image/*' className='hidden' id='upload' onChange={(e)=>{
                  if(e.target.files)
                  setFile(e.target.files[0])}}
                name="image"/>
            <label htmlFor="upload">
            <h3>Upload a file</h3>
            </label>
        </div>
        <button onClick={handleUpdate}> Update </button>
    </div>
  )
}

export default ProfileUpdatePopup