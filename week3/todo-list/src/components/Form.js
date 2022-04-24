import React, { useState } from 'react';
import {v4} from 'uuid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ListForm(props) {
  const { todoList, setTodoList } = props;
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      const newTodo = {
        work: todo,
        checked: false,
        id : v4()
      };
      setTodoList([...todoList, newTodo]);
      e.target.reset();
      setTodo('');
    } else {
      console.log("somethin wrong");
    }
  }
  return (
    <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
      <Form.Control type="text" value={todo} name="todo" 
        onChange={(e) => {setTodo(e.target.value);} }></Form.Control>
      <Button variant="primary" type="submit">Add</Button>
    </Form>
    
  );
}

export default ListForm;