import './App.css';
import Home from './components/Home'
import Product from './components/Product'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:productID" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
