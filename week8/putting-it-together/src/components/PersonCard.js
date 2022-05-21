import React, { useState } from 'react'

class PersonCard extends React.Component {
  render() {
    const { person } = this.props;
    const { firstName, lastName, age, hairColor} = person;
    //const [ ageCnt, setAge ] = useState(age);
    //const aging = () => {
    //  setAge(ageCnt + 1);
    //}
    return (
      <div><h2>{lastName}, {firstName}</h2>
      <p> Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      </div>
    );
  }
  
}
export default PersonCard;