import React from "react";
import { connect } from "react-redux";
import { addTodo } from "./todosSlice";

const mapDispatch = {
  addTodo
};

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = React.useState("");

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!todoText.trim()) {
            return;
          }
          addTodo(todoText);
          setTodoText("");
        }}
      >
        <input value={todoText} onChange={e => setTodoText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  mapDispatch
)(AddTodo);
