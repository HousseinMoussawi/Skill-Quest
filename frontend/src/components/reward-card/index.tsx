import React, { FC, MouseEventHandler } from 'react'
import './index.css'
import { useState } from 'react'

type Props = {
  imageURL:string,
  rewardName: string,
  price:number,
  handleRewardPurchase: MouseEventHandler<HTMLButtonElement>,
  getRewardId:(e:any)=>void,
  rewardId:string,
}

const RewardCard: FC<Props> = ({imageURL,price,rewardName,handleRewardPurchase,getRewardId,rewardId}) => {
  const [hidden,setHidden] = useState<boolean>(true)


  const handleHiddenToggle = (e:any)=>{
    getRewardId(rewardId)
    setHidden(!hidden)
  }

  return (
    <div className='reward-card flex column relative between' onClick={handleHiddenToggle}>
        <img src={imageURL} alt="" />
        <div className='reward-card-info flex column between align-center'>
          <div className='reward-name flex between align-center'>
              <h2>{rewardName}</h2>
              <h4>{price}</h4>
          </div>

        </div>
        <div className={`buy-div flex center absolute ${hidden?'hidden':''}`}  onClick={handleHiddenToggle}>
                <button onClick={handleRewardPurchase}>Buy</button>
          </div>
    </div>
  )
}

export default RewardCard