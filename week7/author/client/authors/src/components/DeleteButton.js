import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const DeleteButton = (props) => {
  const { cssStyle, authorId, callbackFunction} = props;
  const deleteAuthor = () => {
    axios.delete(`http://localhost:8000/api/author/${authorId}`)
    .then(res => {
      callbackFunction();
    })
    .catch(err=>{
      console.log('delete err', err)
    })
  }
  return (
    <Button variant={cssStyle} onClick={deleteAuthor}>Delete</Button>
  )
}

export default DeleteButton