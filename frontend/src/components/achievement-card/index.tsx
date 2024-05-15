import React, { FC } from 'react'
import './index.css'
import { Tooltip } from 'react-tooltip'

type Props = {
    source:string,
    info:string
}

const AchievementCard:FC<Props> = ({source,info}) => {
  return (
    <div className='achievement-card flex justify-center'>
        <img src={source} alt="" data-tooltip-content={info} data-tooltip-id="my-tooltip" data-tooltip-place='top-end' />
        <Tooltip id="my-tooltip" className='tooltip' />


    </div>
  )
}

export default AchievementCard