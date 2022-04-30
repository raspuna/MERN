import React from 'react'

function Home() {
  return (
    <div>
      <h1>Routing Practice</h1>
      <ol>
        <li>/home</li>
        <li>{"/{number}"}</li>
        <li>{"/{word}"}</li>
        <li>{"/{number or word}/{background color}/{text color}"}</li>
      </ol>

    </div>
    
  )
}

export default Home