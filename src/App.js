import React from "react";
import Add from "./Components/Add/AddList";
import Filters from "./Components/AllFilters";
import List from "./Components/List/List";

const App = () => {
  return (
    <div className="container">
      <div className="card heighten">
        <div className="top">
          <h3>Todos</h3>
        </div>
        <Filters />
        <List />
        <Add />
      </div>
    </div>
  );
};

export default App;
