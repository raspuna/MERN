import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  const [ todoList, setTodoList ] = useState([]);
  console.log({todoList});
  return (
    <div className="App">
      <h1> Todo List </h1>
      <Container>
        <Row>
          <Col>
            <Form todoList={todoList} setTodoList={setTodoList} />
          </Col>
        </Row>
        <Row>
          <Col>
          {todoList.map((todo) => {
              return <Todo todo={todo} todoList={todoList} setTodoList={setTodoList}/>
            })}

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
