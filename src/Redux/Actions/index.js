const TodoActions = {
  addTodo: (data) => {
    return {
      type: "ADD",
      payload: data,
    };
  },
  updateTodoList: (data) => {
    return {
      type: "UPDATE",
      payload: data,
    };
  },
  filterTodoList: (filter) => {
    return {
      type: "FILTER_TODO",
      payload: filter,
    };
  },
  updateCheckStatus: (data) => {
    return {
      type: "UPDATE_CHECK_STATUS",
      payload: data,
    };
  },
  setUpdateData: (data) => {
    return {
      type: "SET_UPDATE_DATA",
      payload: data,
    };
  },
};

export default TodoActions;
