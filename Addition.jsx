import React from 'react'
import { useState } from 'react'

function Addition() {
    let [a,setA]=useState(0)
    let [b,setB]=useState(0)
    let [c,setC]=useState(0)

    let updateA=(e)=>
    {
        setA(parseFloat(e.target.value))
    }
let updateB=(e)=>
{
    setB(parseFloat(e.target.value))
}
let sum=()=>
{
setC(a+b)
}
 let substraction=()=>
 {
    setC(a-b)
 }
 let multiplication=()=>
 {
    setC(a*b )

 }
 let division=()=>
 {
    setC(a/b)
 }

  return (
    <div>
        <input type="number" placeholder='enter the value' onChange={updateA}/><br/>
        <input type="number" placeholder='enter the value' onChange={updateB}/><br/>
        <div>Result is = {c} </div>
        <button onClick={sum}>+</button>
        <button onClick={substraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
    </div>
  )
}

export default Addition