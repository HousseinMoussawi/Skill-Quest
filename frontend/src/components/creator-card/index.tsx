import React, { FC } from 'react'
import './index.css'

type Props = {
  creatorName: string,
  creatorImageURL: string,
}

const CreatorCard: FC<Props> = ({creatorName,creatorImageURL}) => {
  return (
    <div className='creator-card flex column between'>
        <img src={creatorImageURL} alt="" />
        <div className='creator-card-info flex column between align-center'>
          <div className='creator-name flex between justify-center'>
              <h1>{creatorName}</h1>

          </div>
          <div className='creator-status flex align-center between'>
            <h4></h4>
            <h4></h4>
          </div>
        </div>
    </div>
  )
}

export default CreatorCard