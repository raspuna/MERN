import React from 'react'
import { useParams } from "react-router-dom";

function Word() {
  const { word, ...rest } = useParams();
  let bg = 'white';
  let tc = 'black';
  if (rest) {
    bg = rest.bg;
    tc = rest.tc;
  }
  console.log(tc);
  return (
    <div style = {
      { 
        background: bg, 
        color:tc,
        padding: "1rem",
        border: "1px solid black" 
      }
    }
    >
      {
        isNaN(word)
        ? "The word is:" + word
        : "The number is:" + word
      }
    </div>
  );
}
export default Word;