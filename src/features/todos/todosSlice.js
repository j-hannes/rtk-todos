import { createSlice } from "@reduxjs/toolkit"

let nextTodoId = 0

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(todos, { payload }) {
        const { id, text } = payload
        todos.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { id: nextTodoId++, text } }
      }
    },
    toggleTodo(todos, { payload }) {
      const todo = todos.find(({ id }) => id === payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
