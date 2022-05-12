import React from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const DeleteButton = (props) => {
  const { style, productId, callbackFunction} = props;
  const deleteProduct = e => {
    axios.delete('http://localhost:8000/api/product/' + productId)
    .then(res => {
      callbackFunction();
    })
    .catch(err=>{
      console.log('delete err', err)
    })
  }
  return (
    <Button variant={style} onClick={deleteProduct}>Delete</Button>
  )
}

export default DeleteButton