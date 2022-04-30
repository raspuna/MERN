import React from 'react'
import { useParams } from "react-router-dom"

function Number(props) {
  const {number } = useParams();
  return (
    <div>The number is: { number }</div>
  );
}
export default Number;