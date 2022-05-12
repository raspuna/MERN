import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router-dom';

function ProductForm(props) {
  const navigate = useNavigate();
  const { productID } = useParams();
  const { addFromDom } = props;
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');

  useEffect(()=>{
    if (productID) {
      console.log({productID})
      axios.get(`http://localhost:8000/api/product/${productID}`)
      .then(res=>{
        console.log(res.data)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDesc(res.data.description)
      })
      .catch(err=>console.log(err))
    }
  },[])
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(title && price && desc) {
      const product = {
        title:title,
        price:price,
        description:desc,
      }
      console.log({product});
      if(productID){ // update
        console.log({productID})
        axios.put("http://localhost:8000/api/product/"+productID, product)
        .then(res=>{console.log(res)
          navigate("/"+productID);
        })
        .catch(err=>{console.log("put submit fail", err)})
      } else { // create
        axios.post("http://localhost:8000/api/products", product)
        .then(res=>{console.log(res)
          addFromDom(res.data.newProduct)
          e.target.reset();
          setTitle('');
          setPrice(0);
          setDesc('');
        })
        .catch(err=>{console.log("post submit fail", err)})
      }
    } else {
      console.log("error")
    }
  }
  return (
    <div>
      <h2> Product Manager </h2>
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