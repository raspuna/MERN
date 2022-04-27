import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [pokemons, setPokemons] = useState([])
  axios.get('https://pokeapi.co/api/v2/pokemon')
  .then((result) =>{
    console.log(result.data.results)
    setPokemons(result.data.results)
  }).catch((error) => {
    console.log(error)
  })
  return (
    <div className="App">
      {
        pokemons.map((pokemon) => (
          <div>{pokemon.name}</div>
        ))
      }  
    </div>
  );
}

export default App;
