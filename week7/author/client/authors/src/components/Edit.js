import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Header from './Header'

function Edit() {

  return (
    <>
      <Header></Header>
       <Link to="/">Home</Link>
       <p>Edit this author:</p>
       <Form />
    </>
  )
}

export default Edit