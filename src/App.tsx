
import React, { useState } from "react";
import "./App.css";
import { type } from "os";

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name:string,
  done:boolean
}


const App = (): JSX.Element => {

const[newTask, setsnewTask] = useState<string>("");
const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e:FormElement) =>{
    e.preventDefault();
    addTasks(newTask);
    console.log(tasks);
  };

  const addTasks =  (name:string) =>{
    const newtasks = [...tasks,{name,done:false}];
    setTasks(newtasks);
  };

  return (
    <>
      <form onSubmit ={handleSubmit}>
        <input type="text"  onChange={e => setsnewTask(e.target.value)} value={newTask}/>
        <button>Save</button>
      </form>
      {
        tasks.map((t:ITask, index:number)=>{
          return <h1 key={index}> {t.name}</h1>;
        })
      }
    </>
  );
};

export default App;
