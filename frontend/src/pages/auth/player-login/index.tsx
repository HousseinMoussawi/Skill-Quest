import React from 'react'
import UserType from '../../../components/user_type_btn'
import Login from '../../../components/login'

const PlayerLogin = () => {
  return (
    <div className='right-half flex center'>
        <UserType auth='Registration' opposite='Player' user='Creator' location='/auth/creator-login' />
        <Login title='Player'/>
    </div>
  )
}

export default PlayerLogin