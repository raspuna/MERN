import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  const people = [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 45,
      hairColor: 'Black'
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hairColor: 'Brown'
    },
    {
      firstName: 'Millard',
      lastName: 'Fillmore',
      age: 50,
      hairColor: 'Brown'
    },
    {
      firstName: 'Maria',
      lastName: 'Smith',
      age: 62,
      hairColor: 'Brown'
    }
  ]
  return (
    <>
      <div className="App">
        <PersonCard person = {people[0]} />
        <PersonCard person = {people[1]} />
        <PersonCard person = {people[2]} />
        <PersonCard person = {people[3]} />
      </div>
    </>
  );
}

export default App;
