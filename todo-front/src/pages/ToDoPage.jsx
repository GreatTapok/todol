import React, { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import LoadMessage from '../components/LoadMessage'
import Todo from '../components/Todo'
import {useTodos} from '../hooks/todos'
import NewTodo from '../components/NewTodo'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'




export default function ToDoPage() {
  
  const {loading, error, todos, addTodo, handleDelete} = useTodos()
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createHandler = (todo) => {
    setOpen(false);
    addTodo(todo)
  }

  


  return (
    <div style={{marginLeft: '15%', marginRight: '15%'}}>
      {loading && <LoadMessage />}
      {error && <ErrorMessage error={error} />}
      <div >
        {todos.map(todo => <Todo todo={todo} onDelete={handleDelete} key={todo._id} />)}
        <br></br>
        
      </div>
      <Button onClick={openModal}>Add new To-Do</Button>
      <Modal
        open={open}
        onClose={onClose}
      >
        <NewTodo onCreate={createHandler}/>
      </Modal>

    </div> 
    
  );
}
