import './App.css';
import {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [boxes, setBoxes] = useState([]);
  return (
    <Container>
      <Row>
        <Col><Form boxes={boxes} setBoxes={setBoxes}></Form></Col>
      </Row>
      <Row>
          {boxes.map((box) => {
              console.log(box);
              return <Col> <Box box={box} boxes={boxes}
                setBoxes={setBoxes}></Box> </Col>
            }
          )
          }
      </Row>
    </Container>
  );
}

export default App;
