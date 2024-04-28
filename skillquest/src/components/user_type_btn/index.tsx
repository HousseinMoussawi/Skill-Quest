import React from 'react'

type Props = {
    user: string,
    auth:string,
}

const UserType = (props: Props) => {
  return (
    <div>
        <button>{props.user}{props.auth}</button>
    </div>
  )
}

export default UserType