import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'

export default function Todo({todo, onDelete}) {




  return (
    <div>
      <FormControlLabel control={<Checkbox/>} label={todo.title} />
      <Button onClick={() => onDelete(todo._id)}>Delete</Button>
    </div>
  )
}