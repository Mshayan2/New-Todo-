import React, { useState } from 'react';
import './styles.css';

const Todo = () => {
  const [addTodo, setaddTodo] = useState('');
  const [showTodo, setshowTodo] = useState([]);

  const addtask = () => {
    if (addTodo.trim() === '') return;
    const newTask = { text: addTodo, done: false };
    setshowTodo([...showTodo, newTask]);
    setaddTodo('');
  };

  const deleteTask = (index) => {
    const updated = showTodo.filter((_, i) => i !== index);
    setshowTodo(updated);
  };

  const toggleComplete = (index) => {
    const updated = showTodo.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setshowTodo(updated);
  };

  return (
    <div>
      <div className="container">
        <div className="input">
          <input
            type="text"
            value={addTodo}
            onChange={(e) => setaddTodo(e.target.value)}
            placeholder="Write your task"
          />
          <button onClick={addtask}>ADD TODO</button>
        </div>

        <div className="Content">
          <ul>
            {showTodo.map((task, index) => (
              <li key={index}>
                <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                  {index + 1}. {task.text}
                </span>
                <button onClick={() => toggleComplete(index)}>
                  {task.done ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
