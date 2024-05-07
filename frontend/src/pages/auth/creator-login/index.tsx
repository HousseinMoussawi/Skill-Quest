import React from 'react'
import UserType from '../../../components/user_type_btn'
import Login from '../../../components/login'

const CreatorLogin = () => {
  return (
    <div className='right-half flex center'>
        <UserType auth='Registration' opposite='Creator' user='Player' location='/auth/player-login' />
        <Login title='Creator'/>
    </div>
  )
}

export default CreatorLogin