import React from 'react'
const Props2 = ({name,surname2}) => {
    const numbers = [1, 2, 3, 4, 5];

    const [first,... second] = numbers;
    
    console.log(numbers[1]);  // Output: 1
    console.log(second); // Output: 2
  return (
   
    <div>
      
        <p>{name} and {surname2}</p>
    </div>
  )
}

export default Props2;