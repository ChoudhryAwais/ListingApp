import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import "../../styling/style.css";

const TodoFilter = ({ filter, icon }) => {
  const dispatch = useDispatch();
  const todoFilter = useSelector((state) => state.todo.todoFilter);
  return (
    <a
      className={`filter__link ${
        todoFilter === filter ? "active-filter-" + todoFilter : ""
      }`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        dispatch(actions.filterTodoList(filter));
      }}
    >
      <i className={`fa fa-${icon}`}></i>
      <span className={"hide-filter-name filter-name filter_name-" + icon}>
       
      </span>
    </a>
  );
};

export default TodoFilter;
