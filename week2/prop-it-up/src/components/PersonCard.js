import React from 'react'

const PersonCard = (props) => {
  const { person } = props;
  const { firstName, lastName, age, hairColor} = person;
  return (
    <div><h2>{lastName}, {firstName}</h2>
    <p> Age: {age}</p>
    <p>Hair Color: {hairColor}</p>
    </div>
  );
}
export default PersonCard;