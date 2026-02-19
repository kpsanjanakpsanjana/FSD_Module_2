import React, { useState } from 'react'
export default function Variable() {
    const [userName, setUsername] = useState()
  return (
    <div>
   <h1>Happy New year {userName} </h1>
   <input type="text" value={userName}
   onChange={(e)=>setUsername(e.target.value)}/>
    </div>
  )
}
