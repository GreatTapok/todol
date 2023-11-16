import React, {useState} from 'react'
import ErrorMessage from './ErrorMessage'
import axios from 'axios'
import Button from '@mui/material/Button'

const todoData = {
  title: '',
  description: ''
}

export default function NewTodo({onCreate}) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState('')
  const [descr, setDescr] = useState('')


  const submitHandler = async (event) => {
    event.preventDefault()
    setError('')
    todoData.title = title
    todoData.description = descr
    const response = await axios.post('http://localhost:3000/api/v1/todo', todoData)
  
    onCreate(response.data.todo)
  }


  
  return (
    <form onSubmit={submitHandler}>
      <textarea
        placeholder='Enter to-do title...'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        placeholder='Enter to-do description...'
        value={descr}
        onChange={(event) => setDescr(event.target.value)}
      />
      {error && <ErrorMessage error={error} />}
      <Button variant="contained" type="submit">
        Add new To-Do
      </Button>
      
    </form>
  )
}