import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


function Product() {
  const { productID } = useParams();
  const [ product, setProduct ] = useState({});
  useEffect(() => {
    console.log({productID})
    axios.get(`http://localhost:8000/api/product/${productID}`)
      .then((res)=>{
        console.log("data", res.data)
        setProduct(res.data)
      }).catch((err)=>{
        console.log("product info err", err)
      })
  }, [])
  //console.log({product})
  return (
    <div>
      <h2>{product.title}</h2>
      <p> Price: {product.price}</p>
      <p> Description: {product.description}</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Product