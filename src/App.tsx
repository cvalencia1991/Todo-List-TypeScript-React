import React, { useState } from "react";
import "./App.css";
import Taskview from "./components/Taskview";
import { ITask } from "./interfaces/ITask";
import TaskForm from "./components/TaskForm";

const App = (): JSX.Element => {
  const [newTask, setnewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTasks(newTask);
  };

  const addTasks = (name: string) => {
    if (name !==  ""){
      const newtasks: ITask[] = [...tasks, { name, done: false, id: Math.random()}];
      setTasks(newtasks);
    }
  };


  const handleDelete = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <>
      <main>
        <TaskForm  handleSubmit={handleSubmit}  setnewTask={setnewTask} newTask={newTask} />
        <Taskview  handleDelete={handleDelete}  tasks={tasks} />
      </main>
    </>
  );
};

export default App;
