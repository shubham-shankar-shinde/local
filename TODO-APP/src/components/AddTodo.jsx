import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handlenameonchange = (event) => {
    setTodoName(event.target.value);
  };
  const handledateonchange = (event) => {
    setDueDate(event.target.value);
  };
  const handledonbuttonclick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handlenameonchange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handledateonchange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            onClick={handledonbuttonclick}
            className="btn btn-success kg-button asign"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
