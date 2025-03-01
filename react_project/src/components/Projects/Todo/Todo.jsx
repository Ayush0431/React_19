import { useState } from "react";
import { MdCheckBox , MdDelete } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setinputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (value) => {
    setinputValue(value);
  };
  const handleFormSubmit = () => {
    event.preventDefault();

    if (!inputValue) return; // to prevent from entereing the empty value
    if (tasks.includes(inputValue)) {
      setinputValue("");
      return;
    } // to prevent dupicate value

    setTasks((prev) => [...prev, inputValue]);

    setinputValue(""); // again make the value in the box empty once value is added to teh array.
    console.log(inputValue);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List </h1>
        </header>
        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnOrdList">
          <ul>
            {tasks.map((curTask, index) => {
              return (
                <li key={index} className="todo-item">
                  <span>{curTask}</span>
                  <button className="check-btn">
                  <MdCheckBox />
                  </button>
                  <button  className="delete-btn">
                    <MdDelete />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
