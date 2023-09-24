import { useState } from "react";
import TaskForm from "./TaskForm";
import { ITask, HandleForm } from "../interfaces/ITask";
import IconMoon from "../icons/icon-moon";
import Taskview from "./Taskview";


const TodoForm = () => {

    const initialTaskState = {
        name: "",
        done: false,
    };

    const [keyB, setKeyB] = useState<string>("");
    const [newTask, setNewTask] = useState(initialTaskState);
    const [tasks, setTasks] = useState<ITask[]>([]);

    const handleSubmit = (e: HandleForm) => {
        e.preventDefault();
        addTasks(newTask.name, newTask.done);
    };

    const handlekeypressed = (event: React.KeyboardEvent<HTMLInputElement>): void =>{
        setKeyB(event.key);
    };

    const addTasks = (name: string, done: boolean) => {
    if (name !==  "" && keyB === "Enter"){
        const newtasks: ITask[] = [...tasks, { name, done, id: Math.random()}];
        setTasks(newtasks);
        setNewTask({name: "", done: false});
        }
    };

    const handleDelete = (id: number) => {
        const newtasks: ITask[] = tasks.filter((task) => task.id !== id);
        setTasks(newtasks);
    };

    return (
    <>
        <div className="flex flex-col items-center justify-center bg-no-repeat h-72 w-screen mobile:bg-mobile-light desktop:bg-desktop-light bg-cover">
            <div className="flex justify-center  gap-4 flex-col desktop:w-[40em] mobile:w-80">
            <div className='flex justify-between items-center'>
                <h1 className=" text-[30px] tracking-[0.5em] font-bold text-[--very-light-gray] font-josefin">TODO</h1>
                <button><IconMoon/></button>
            </div>
            <TaskForm handlekeypress={handlekeypressed} handleSubmit={handleSubmit}  setNewTask={setNewTask} newTask={newTask} />
            </div>
        </div>
        <div className="flex relative -top-4 justify-center items-center w-full">
                <Taskview tasks={tasks} handleDelete={handleDelete}/>
        </div>
    </>
    );
};



export default TodoForm;