import React, { useState } from 'react'
import Form from './Form'
import List from './List'

function Home() {
  const [products, setProducts] = useState([]);
  const addFromDom = (newProduct) =>{
    setProducts([...products, newProduct])
  }
  const removeFromDom = (productId) => {
    setProducts(products.filter((ele)=>{
      return ele._id != productId
    }))
  }
  return (
    <div>
      <Form addFromDom={addFromDom}/>
      <List products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Home