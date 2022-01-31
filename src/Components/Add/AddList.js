import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import "../../styling/style.css";

const AddList = () => {
  const updateTodo = useSelector((state) => state.todo.updateData);
  const [item, setItem] = useState(!!updateTodo ? updateTodo.text : "");
  const dispatch = useDispatch();

  useEffect(() => {
    if (updateTodo) {
      setItem(updateTodo.text);
    }
  }, [updateTodo]);
  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo__input"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button
        className="add-todo__btn"
        onClick={() => {
          if (updateTodo) {
            dispatch(
              actions.updateTodoList({
                ...updateTodo,
                text: item,
              })
            );
          } else {
            dispatch(
              actions.addTodo({
                id: Math.floor(Math.random() * Date.now()),
                text: item,
                checked: false,
                status: "Active",
              })
            );
          }
          setItem("");
        }}
        disabled={item ? false : true}
      >
        <i className={`fa fa-${updateTodo ? "save" : "plus"}`}></i>
      </button>
    </div>
  );
};

export default AddList;
