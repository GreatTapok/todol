import {useState, useEffect} from 'react'
import axios from 'axios'

export const useTodos = () => {
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])
  const [error, setError] = useState('')


  const addTodo = (todo) => { 
    setTodos(prev => [todo, ...prev])
  }

  async function fetchTodos() {
    try {
      setError('')
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/v1/todo')
      setTodos(response.data.todos)
      setLoading(false)
    } catch (err) {
      const error = err
      setLoading(false)
      setError(error.message)
    }
  }

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/todo/${id}`)
      setTodos(todos.filter(todo => todo._id !== id))
    } catch (error) {
      console.error('Error deleting to-do:', error);
    }
  };


  useEffect(() => {
    fetchTodos()
  }, [])
  return {todos, error, loading,  addTodo, handleDelete}
}