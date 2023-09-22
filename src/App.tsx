import React, { useState } from "react";
import Taskview from "./components/Taskview";
import { ITask } from "./interfaces/ITask";
import TaskForm from "./components/TaskForm";
import TodoHead from "./components/TodoHead";


const App = (): JSX.Element => {
  const [keyB, setKeyB] = useState<string>("");
  const [newTask, setnewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTasks(newTask);
  };

  const handlekeypressed = (event: React.KeyboardEvent<HTMLInputElement>): void =>{
    setKeyB(event.key);
  };

  const addTasks = (name: string) => {
    if (name !==  "" && keyB === "Enter"){
      const newtasks: ITask[] = [...tasks, { name, done: false, id: Math.random()}];
      setTasks(newtasks);
      setnewTask("");
    }
  };

  const handleDelete = (id: number) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <>
      <TodoHead/>
      <main>
        <TaskForm handlekeypress={handlekeypressed} handleSubmit={handleSubmit}  setnewTask={setnewTask} newTask={newTask} />
        <Taskview handleDelete={handleDelete}  tasks={tasks} />
      </main>
    </>
  );
};

export default App;


