import React, { useState } from 'react'
import data from './Data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List key={people.id} {...people} list={people}/>
        <button type='button' className='btn'  onClick={()=>setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
