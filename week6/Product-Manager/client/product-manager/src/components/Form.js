import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductForm() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');
  const [message, setMessage ] = useState("Loading...")
  useEffect(()=>{
    axios.get("http://localhost:8000/")
      .then(res=>setMessage(res.data.message))
      .catch(err=>console.log(err))
  },[])
  //const [ products, setProducts] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(title && price && desc) {
      const product = {
        title:title,
        price:price,
        description:desc,
      }
      console.log({product});
      axios.post("http://localhost:8000/api/products", product)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log("submit fail", err)})
      //setProducts([products, ...product]);
      e.target.reset();
      setTitle('');
      setPrice(0);
      setDesc('');
    } else {
      console.log("error")
    }
  }
  return (
    <div> <h2>{message}</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup className='d-flex'>
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} name="title" 
            onChange={(e) => { setTitle(e.target.value); }}/>
        </FormGroup>
        <FormGroup className='d-flex'>
          <Form.Label>Price:</Form.Label>
          <Form.Control type="number" value={price} name="price" 
            onChange={(e) => { setPrice(e.target.value); }}/>
        </FormGroup>
        <FormGroup className='d-flex align-items-center'>
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows={20} cols={50} value={desc} name="desc" onChange={(e) => { setDesc(e.target.value); }}/>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default ProductForm