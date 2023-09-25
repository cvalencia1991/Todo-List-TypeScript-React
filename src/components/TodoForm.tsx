import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { ITask, HandleForm, Task } from "../interfaces/ITask";
import IconMoon from "../icons/icon-moon";
import Taskview from "./Taskview";
import Iconsun from "../icons/icon-sun";


const TodoForm = () => {

    const initialTaskState = {
        name: "",
        done: false,
    };
    const body = document.querySelector("body") as HTMLBodyElement;

    const [keyB, setKeyB] = useState<string>("");
    const [newTask, setNewTask] = useState<Task>(initialTaskState);
    const [tasks, setTasks] = useState<ITask[]>(()=>{
        const localTasks = localStorage.getItem("tasks");
        return localTasks ? JSON.parse(localTasks) : [];
    });
    const [tasksState,setTaskState] = useState<ITask[]>(()=>{
        const localTasks = localStorage.getItem("tasks");
        return localTasks ? JSON.parse(localTasks) : [];
    });

    const [theme, setTheme] = useState<string>(()=>{
       return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksState));
    }, [tasksState]);

    useEffect(() => {
        const localTasks = localStorage.getItem("tasks");
        if(localTasks){
            setTasks(JSON.parse(localTasks));
        }
    }
    ,[]);



    useEffect(() => {
        if(theme === "dark"){
            body.classList.add("dark");
            body.classList.add("bg-[#161722]");
        }else{
            body.classList.remove("dark");
            body.classList.remove("bg-[#161722]");
        }
    }, [theme]);


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
        setTaskState(newtasks);
        setNewTask({name: "", done: false});
        }
    };

    const handleDelete = (id: number) => {
        const newtasks: ITask[] = tasks.filter((task) => task.id !== id);
        setTasks(newtasks);
    };

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleDone = (id: number) => {
        const newtasks: ITask[] = tasks.map((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        setTasks(newtasks);
    };


    const activeTask = () => {
        const newtasks: ITask[] = tasks.filter((task) => task.done === false);
        setTasks(newtasks);
    };

    const completedTask = () => {
        const newtasks: ITask[] = tasks.filter((task) => task.done === true);
        setTasks(newtasks);
    };

    const allTask = () => {
        setTasks(tasksState);
    };

    const clearCompleted = () => {
        const newtasks: ITask[] = tasks.filter((task) => task.done === false);
        setTaskState(newtasks);
        setTasks(newtasks);
    };


    return (
    <>
        <div className="flex flex-col items-center justify-center bg-no-repeat h-72 w-screen mobile:bg-mobile-light dark:mobile:bg-mobile-dark desktop:bg-desktop-light bg-cover dark:desktop:bg-desktop-dark">
            <div className="flex justify-center  gap-4 flex-col desktop:w-[40em] mobile:w-80">
            <div className='flex justify-between items-center'>
                <h1 className=" text-[30px] tracking-[0.5em] font-bold text-[--very-light-gray] font-josefin">TODO</h1>
                <button onClick={handleTheme}>{theme == "light" ? <IconMoon/> : <Iconsun/>}</button>
            </div>
            <TaskForm handlekeypress={handlekeypressed} handleSubmit={handleSubmit}  setNewTask={setNewTask} newTask={newTask} />
            </div>
        </div>
        <div className="flex relative -top-4 justify-center items-center w-full">
            <Taskview
                activeTask={activeTask}
                completedTask={completedTask}
                allTask={allTask}
                clearCompleted={clearCompleted}
                handleDone={handleDone}
                tasks={tasks}
                handleDelete={handleDelete}
            />
        </div>
    </>
    );
};



export default TodoForm;