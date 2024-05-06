import React from 'react'
import './index.css'
import { useState } from 'react'


type Props = {
    placeholder: string,
    handleChange: string,
}

const Input = () => {
    const [input, setInput] = useState<string>()
  return (
    <div>
        <input type="text" placeholder={placeholder} onChange={(e)=>{
            setInput(e.target.value)
        }}/>
    </div>
  )
}

export default Input