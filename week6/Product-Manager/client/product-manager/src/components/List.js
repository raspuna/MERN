import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

function ProductList(props) {
  const { products, setProducts, removeFromDom } = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res)=>{
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log("list get err:", err)
      })
    }, [])
  const deleteFromList = (id) => {
    axios.delete("http://localhost:8000/api/product/" + id)
    .then((res)=>{
      removeFromDom(id)
    }).catch(err=>{
      console.log("delete fail", err)
    })
  }
  return (
    <div>
      <h2>All Products</h2>
      {
        products.map((product)=>(
          <p key={product._id}>
            <Link to={`/${product._id}`} className="btn btn-link">{product.title}</Link> 
            <Link to={"/edit/"+product._id} className="btn btn-link">Edit</Link> 
            <DeleteButton productId={product._id} callbackFunction={()=>removeFromDom(product._id)} 
              style={"link"} />
          </p>
        ))
      }
    </div>
  )
}

export default ProductList