import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res)=>{
        console.log("I did it!", res.data)
        console.log(res.data.products)
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log("list get err:", err)
      })
    }, [])
  return (
    <div>
      <h2>All Products</h2>
      {
        products.map((product)=>(
          <p><Link to={`/${product._id}`}>{product.title}</Link></p>
        ))
      }
    </div>
  )
}

export default ProductList