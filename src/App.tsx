import React, { useState } from "react";
import "./App.css";
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
    if (name !==  ""){
      const newtasks: ITask[] = [...tasks, { name, done: false }];
      setTasks(newtasks);
    }
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
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
        </div>
      </form>
      <main>
        <Taskview tasks={tasks} />
      </main>
    </>
  );
};

export default App;
