import React from 'react'
import './index.css'

type Props = {
    opposite:string,
    user: string,
    auth:string,
}

const UserType = (props: Props) => {
  return (
    <div className='user-type flex center'>
        <h4>Not a {props.opposite}?</h4>
        <button>{props.user} {props.auth}</button>
    </div>
  )
}

export default UserType