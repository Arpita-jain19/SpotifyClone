import React, { useEffect, useState } from 'react'
//Initialization,Mounting,Updation,Demounting
const UseEffect = () => {
  const [counter, setcounter] = useState(0)
  useEffect(() => {
   console.log("mounted")
   return function(){
    console.log("unmount")
   }
  
   
  }, [])
  useEffect(() => {
    console.log("mounted")
   
    
   }, [counter])
  const handleClick=()=>{
    setcounter(counter+1)
    console.log(counter+1)
  }
  
  return (
    <div>
      <p >{counter}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default UseEffect