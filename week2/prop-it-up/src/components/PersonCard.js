import React, { useState } from 'react'

const PersonCard = (props) => {
  const { person } = props;
  const { firstName, lastName, age, hairColor} = person;
  const [ ageCnt, setAge ] = useState(age);
  const aging = () => {
    setAge(ageCnt + 1);
  }
  return (
    <div><h2>{lastName}, {firstName}</h2>
    <p> Age: {ageCnt}</p>
    <p>Hair Color: {hairColor}</p>
    <button onClick={aging}>Birthday Button for {firstName} {lastName}</button>
    </div>
  );
}
export default PersonCard;