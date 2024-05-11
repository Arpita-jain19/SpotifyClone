import React from 'react'
export const Child = (props) => {
    console.log(props)
  return (
    <div><ul>
    {props.name2.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul></div>
  )
}
