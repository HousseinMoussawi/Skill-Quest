import React from 'react'
import UserType from '../../../components/user_type_btn'
import Login from '../../../components/login'

const CreatorLogin = () => {
  return (
    <div className='right-half flex center'>
        <UserType auth='Login' opposite='Creator' user='Player' location='/auth/' />
        <Login title='Creator' location='/auth/creator-signup'/>
    </div>
  )
}

export default CreatorLogin