import React from "react";
import TodoFilter from "./Filter";
import "../../styling/style.css";

const TodoFilters = () => {
  const filterObj = [
    {
      key: 100,
      label: "All",
      icon: "list-ul",
    },
    {
      key: 101,
      label: "Active",
      icon: "times",
    },
    {
      key: 102,
      label: "Completed",
      icon: "check",
    },
  ];
  return (
    <div className="filters">
      {filterObj.map((items) => {
        return (
          <React.Fragment key={items.key}>
            <TodoFilter filter={items.label} icon={items.icon} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TodoFilters;
