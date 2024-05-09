import React, { FC } from 'react'
import './index.css'

type Props = {
  name: string,
  imageURL: string,
}

const ProfileImage: FC<Props> = ({name,imageURL}) => {
  return (
    <div className='profile-image flex column align center evenly'> 
      <img src={imageURL} alt="" />
      <h1>#{name}</h1>
    </div>
  )
}

export default ProfileImage