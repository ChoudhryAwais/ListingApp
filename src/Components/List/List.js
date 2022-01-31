import React from "react";
import Todo from "../MainCard/TodoCard";
import { useSelector } from "react-redux";
const TodoList = () => {
  const todos = useSelector((state) => state.todo.tasks);
  const todoFilter = useSelector((state) => state.todo.todoFilter);
  const filterList = todos.filter((item) =>
    todoFilter === "All"
      ? item.status !== "Deleted" ?? item
      : todoFilter === item.status
  );
  return (
    <div className="todo-list-wrapper">
      {filterList.length > 0 ? (
        filterList.map((todo, index) => (
          <Todo key={todo.id} index={index + 1} todo={todo} />
        ))
      ) : (
        todoFilter==="All"?
        <h3 className="noData">Nothing Todo</h3>
        :todoFilter==="Completed"?  
        <h3 className="noData">No Completed task</h3>
        :<h3 className="noData">No Active task</h3>
      )}
    </div>
  );
};

export default TodoList;
