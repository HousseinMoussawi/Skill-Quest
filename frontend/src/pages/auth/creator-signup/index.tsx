import React from 'react'
import UserType from '../../../components/user_type_btn'
import Signup from '../../../components/signup'

const CreatorSignup = () => {
  return (
    <div className='right-half flex center'>
        <UserType auth='Login' opposite='Creator' user='Player' location='/auth/player-signup'/>
        <Signup title='Creator'/>
    </div>
  )
}

export default CreatorSignup