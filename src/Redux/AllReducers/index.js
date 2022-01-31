const defaultState = {
  tasks: [],
  todoFilter: "All",
  updateData: null,
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE":
      return {
        ...state,
        tasks: [...state.tasks].map((obj) =>
          action.payload.id === obj.id ? action.payload : obj
        ),
        updateData: null,
      };
    case "FILTER_TODO": {
      return {
        ...state,
        todoFilter: action.payload,
      };
    }
    case "UPDATE_CHECK_STATUS": {
      return {
        ...state,
        tasks: state.tasks?.map((task) => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return {
            ...task,
            checked: !task.checked,
            status: action.payload.status,
          };
        }),
      };
    }
    case "SET_UPDATE_DATA":
      return {
        ...state,
        updateData: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
