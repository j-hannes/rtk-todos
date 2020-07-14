import { createSelector } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { VisibilityFilters } from "../filters/filtersSlice";
import TodoList from "./TodoList";
import { toggleTodo } from "./todosSlice";

const selectTodos = state => state.todos;
const selectFilter = state => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  selectTodos,
  selectFilter,
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }
);

const mapStateToProps = state => ({
  todos: selectVisibleTodos(state)
});

const mapDispatchToProps = {
  toggleTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
