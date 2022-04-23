import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 } from 'uuid';

function BoxForm(props) {
    const { boxes, setBoxes } = props;
    const [color, setColor] = useState('');
    const [size, setSize] = useState(100);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color && size > 0) {
            console.log({size});
            const newBox = {
                id : v4(),
                color: color,
                size: size
            }
            setBoxes([...boxes, newBox]);
            e.target.reset();
            setColor('');
            setSize(100);
        } else if (size <= 0) {
            setError('Choose positive size')
        } else {
            setError('Choose a color');
        }
    }
  return (
    <div>
        <p className="d-flex justify-content-center">
            {error && <p>{error}</p>}
        </p>
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div>

        <Form.Group controlId="color" className="d-flex align-items-center">
            <Form.Label>Color:</Form.Label>
            <Form.Control type="text" name="color"
                onChange={(e) => { setColor(e.target.value) }}>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="size" className="d-flex align-items-center">
            <Form.Label>Size:</Form.Label>
            <Form.Control type="number" name="size" value={size}
                onChange={(e) => { setSize(parseInt(e.target.value)) }}/>
        </Form.Group>

        </div>
        {size > 0 && color ? <Button variant="success" type="submit">Add</Button>
                            :<Button variant="warning" type="submit">Add</Button> }

    </Form>
    </div>
  )
}

export default BoxForm;