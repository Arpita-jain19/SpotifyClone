import React from 'react'
import { Child } from './child'

export const Parent = () => {
    const array=[
       1,2,3,4,5,7,8,9,10
    ]
    
  return (
    <div>
      <Child name2={array}/>
    </div>
  )
}
