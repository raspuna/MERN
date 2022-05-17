import React from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import Header from './Header'

function New() {
  return (
    <>
        <Header></Header>
        <Link to="/">Home</Link>
        <p>Add a new author:</p>
        <Form />
    </>

  )
}

export default New