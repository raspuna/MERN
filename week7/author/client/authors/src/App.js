import './App.css';
import Home from './components/Home'
import New from './components/New'
import Edit from './components/Edit'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:authorID" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

