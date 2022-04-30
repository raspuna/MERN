import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './components/Home';
import Welcome from './components/Welcome';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Welcome />}/>
          <Route path="/:word" element={<Word />} />
          <Route path="/:word/:bg/:tc" element={<Word />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
