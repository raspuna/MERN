import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import List from './List'
import Header from './Header';


function Home() {
  const [authors, setAuthors] = useState([]);
  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((ele)=>{
      return ele._id !== authorId
    }))
  }
  return (
    <div>
      <Header/>
      <Link to="/new">Add an author</Link>
      <List authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Home;