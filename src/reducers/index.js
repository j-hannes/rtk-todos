import { combineReducers } from "redux";
import todos from "../features/todos/todosSlice";
import visibilityFilter from "../features/filters/filtersSlice";

export default combineReducers({
  todos,
  visibilityFilter
});
