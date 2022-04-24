import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function Todo(props) {
  const {todo, todoList, setTodoList} = props;
  const {work, checked, id} = todo
  console.log({work});
  
  const handleCheck = (e) => {
    const newTodoList = todoList.map((el, idx) => {
      const newTodo = {
        work: work, 
        checked: !checked, 
        id: id};
      return  (id === el.id) ? newTodo : el;
    })
    setTodoList(newTodoList);
  }
  const handleDelete = (e) => {
    e.preventDefault();
    const filteredTodoList = todoList.filter((item) => {
      //console.log(item.id);
      //console.log({id});
      return item.id !== id;
    });
    console.log(filteredTodoList)
    setTodoList(filteredTodoList);
  }
  return (
    <div>
      <Form
        className="d-flex justify-content-center">
          { checked? <strike>{work}</strike>: work }
        <Form.Check onClick={handleCheck}>
        </Form.Check>
      </Form>

      <Button onClick={handleDelete} id={id} variant="danger" type="submit">Delete</Button>
    </div>

  )
}

export default Todo