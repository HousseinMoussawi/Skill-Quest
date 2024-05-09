import React from 'react'
import './index.css'
import CreateCard from '../../components/create-card'


type Props = {}

const Create = (props: Props) => {
  return (
    <div>
      <CreateCard />
      <CreateCard />
    </div>
  )
}

export default Create