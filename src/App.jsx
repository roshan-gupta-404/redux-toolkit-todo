import { useEffect, useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import { useDispatch } from 'react-redux'
import {initialValue} from './features/todo/todoSlice'

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) dispatch(initialValue(todos))
  },[])

  return (
    <>
      <div className='text-3xl my-9 text-white'> My Todo App </div>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
