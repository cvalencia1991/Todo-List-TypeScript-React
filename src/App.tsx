import React, { useState } from "react";
import "./index.css";
import Taskview from "./components/Taskview";
import { ITask } from "./interfaces/ITask";

type FormElement = React.FormEvent<HTMLFormElement>;

const App = (): JSX.Element => {
  const [newTask, setsnewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTasks(newTask);
  };

  const addTasks = (name: string) => {
    const newtasks = [...tasks, { name, done: false }];
    setTasks(newtasks);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex m-3 items-center  justify-center">
          <input
            className="appearance-none block bg-gray-200 text-gray-700 h-10 border rounded leading-tight focus:outline-none focus:bg-white"
            type="text"
            onChange={(e) => setsnewTask(e.target.value)}
            value={newTask}
          />
          <button>Save</button>
        </div>
      </form>
      <Taskview tasks={tasks} />
    </>
  );
};

export default App;
