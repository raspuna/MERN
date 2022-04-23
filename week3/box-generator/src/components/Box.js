import React from 'react'

function Box(props) {
    const { box, boxes, setBoxes } = props;
    const {id, color, size} = box
    console.log({color});
    console.log({id});
    console.log({size})
    const boxStyle= {
        border: '1px solid black',
        width: size,
        height: size,
        backgroundColor : color
    }
    const handleDelete = (e) => {
        e.preventDefault();
        console.log(e.target)
        const filteredBox = boxes.filter((box) => box.id !== e.target.id)
        setBoxes(filteredBox)
    }
  return (
    <div style={boxStyle} id={id} onClick={handleDelete}>{color}</div>
  )
}

export default Box;