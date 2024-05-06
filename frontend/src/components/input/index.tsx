import React, { ChangeEvent, FC } from 'react'
import './index.css'


type Props = {
    placeholder: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<Props> = ({placeholder, handleChange}) => {
  return (
    <div>
        <input className='search' type="text" placeholder={placeholder} onChange={handleChange}/>
    </div>
  )
}

export default Input