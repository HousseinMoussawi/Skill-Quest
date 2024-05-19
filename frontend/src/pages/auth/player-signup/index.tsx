import React from 'react'
import UserType from '../../../components/user_type_btn'
import Signup from '../../../components/signup'

const PlayerSignup = () => {
  return (
    <div className='right-half flex center'>
        <UserType auth='Registration' opposite='Player' user='Creator' location='/auth/creator-signup'/>
        <Signup title='Player' location='/auth/'/>
    </div>
  )
}

export default PlayerSignup