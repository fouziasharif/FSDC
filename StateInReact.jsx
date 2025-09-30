import React, { useState } from 'react'

function StateInReact() {

    const [num, setNum] =useState(1);

  return (
    <div>
      <h1>State in React</h1>
      <h2>{num}</h2>
      <button onClick={()=>setNum(num + 1)}>Change City</button>
    </div>
  )
}
export default StateInReact;
