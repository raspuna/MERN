import './App.css';
import axios from 'axios'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'

function App() {
  const [pokemons, setPokemons] = useState([])

  const fetchPokemon = (e) => {
    e.preventDefault();
    console.log("pressed")
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((result) =>{
      console.log(result.data.results)
      setPokemons(result.data.results)
    }).catch((error) => {
      console.log(error)
    })
  }
  const clearPokemon = (e) => {
    e.preventDefault();
    setPokemons([])
  }
  return (
    <div className="App">
      <Button onClick={fetchPokemon}>Fetch Pokemon</Button>
      <Button variant="warning" onClick={clearPokemon}>Clear</Button>
      {
        pokemons.map((pokemon) => (
          <ul>
            <li>{pokemon.name}</li>
          </ul>
        ))
      }  
    </div>
  );
}

export default App;
