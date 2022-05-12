import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import DeleteButton from './DeleteButton'

function Product() {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [ product, setProduct ] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${productID}`)
      .then((res)=>{
        console.log("data", res.data)
        setProduct(res.data)
      }).catch((err)=>{
        console.log("product info err", err)
      })
  }, [])
  const deleteProduct = (id) => {
    axios.delete("http://localhost:8000/api/product/" + id)
    .then((res)=>{
      navigate("/")
    }).catch(err=>{
      console.log("delete err", err)
    })

  }
  return (
    <div>
      <h2>{product.title}</h2>
      <p> Price: {product.price}</p>
      <p> Description: {product.description}</p>
      <Link to={"/edit/"+product._id} className="btn btn-success">Edit</Link>
      <DeleteButton style={'danger'} productId={product._id} callbackFunction={() => navigate("/")} />
      <Link to="/" className="btn btn-primary">Home</Link>
    </div>
  )
}

export default Product