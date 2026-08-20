import { useState } from "react"
import Button from "./Button"

export const IncrementPage = () => {
    const [count, seCount] = useState(0)
    const Increment = ()=>{
        seCount(count+1)
    }
    const Decrement = ()=>{
        seCount(count-1)
    }
    const Reset = ()=>{
        seCount(0)
    }
  return (
    <div>
        <h1>{count}</h1>
        <Button label="Increment" onClick={Increment}></Button>
        <Button label="Reset" onClick={Reset}></Button>
        <Button label="Decrement" onClick={Decrement}></Button>
    </div>
  )
}