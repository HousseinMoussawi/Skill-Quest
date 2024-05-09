import React, { FC } from 'react'
import './index.css'

type Props = {
    user:string,
}

const ProfileGames:FC<Props> = ({user}) => {
  return (
    <div className={`profile-games flex between ${user=='PLAYER'?'column':''}`}>

    </div>
  )
}

export default ProfileGames