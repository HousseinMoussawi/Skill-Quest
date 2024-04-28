import React from 'react'

type Props = {
    opposite:string,
    user: string,
    auth:string,
}

const UserType = (props: Props) => {
  return (
    <div>
        <h2>Not a {props.opposite}?</h2>
        <button>{props.user}{props.auth}</button>
    </div>
  )
}

export default UserType