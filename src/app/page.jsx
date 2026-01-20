"use client";
import { useState } from "react";
import Button from "./components/Button";

export default function TodoApp() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
 
  const addTask = () => {
    const text = input.trim();
    if (!text) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

console.log(tasks)
  return (
    <div className="flex justify-center mt-30">
      <div className="flex flex-col">
        <NameInput input={input} setInput={setInput} addTask={addTask} />

        <NameList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

const NameInput = ({input, setInput,addTask}) => {
  return (
    <div>
      <h1 className="text-center">Todo list</h1>
      <input
        className="flex-1 border rounded px-3 py-2 mt-5 mr-5"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task here"
      />
      <Button onClick={addTask}>add</Button>
    </div>
  );
};


const NameList = ({ tasks,toggleTask ,deleteTask }) => {
  return (
    <ul className="mt-6 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="border rounded p-3 flex justify-between"
        >
          <div className="flex gap-2 items-center">
            <input
            
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
          </div>

          {task.completed && (
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
