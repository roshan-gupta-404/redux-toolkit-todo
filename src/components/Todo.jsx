import React from 'react'
import { useSelector } from 'react-redux'
import EachTodo from './EachTodo';

function Todo() {
  const todos = useSelector((state) => state.todos)
  // useSelector has default access to state which is passed in a callback function that will return values we want from that state.

  return (
    <>
      {/* <div></div> */}
      <ul className="list-none">
        {todos.map((todo) => (
          <EachTodo key={todo.id} todo={todo}/>
        ))}
      </ul>
    </>
  )
}

export default Todo