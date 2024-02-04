import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid is used to create unique ids.

const initialState = {
    todos: []
}

export const todoSlice = createSlice({ //slice is the bigger version of reducer which is nothing but functionality.
    name: 'todo',
    initialState: initialState,
    reducers: {
        initialValue: (state, action)=>{
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
                // i will send data in text variable.

                // text:action.payload.text 
                //since i will send data in text variable and here property is named text, so mentioning '.text' is not madatory.
            }
            state.todos.push(todo)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        updateTodo: (state,action)=>{
            state.todos = state.todos.map((todo)=>((todo.id === action.payload.id) ? {...todo , text:action.payload.todoText}: todo))
            localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }

})

export const { addTodo, removeTodo, updateTodo, initialValue } = todoSlice.actions
// exporting individul functionality. It is for components

export default todoSlice.reducer
// it for awareness of store.js, so that store knows which are the fucntionalities.
// export all reducers if there is multiple Slices.
















/* 
Note:
In context API we used to write only declaration of functionality and not definition, definition would be written in the app.js file.   BUT  In Redux we write definition of functionality at the time of declaration only.

Every reducers has access of 'state' (current state of initialState) and 'action' (action brings the values or payload needed to perform operations).


*/
