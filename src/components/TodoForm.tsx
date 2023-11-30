import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import { ITask, HandleForm, Task } from "../interfaces/ITask";
import Taskview from "./Taskview";
import initialTaskState from "../utils/database";
import TaskTheme from "./TaskTheme";


const TodoForm = () => {

    const [keyB, setKeyB] = useState<string>("");
    const [newTask, setNewTask] = useState<Task[]>(initialTaskState);

    const [tasks, setTasks] = useState<ITask[]>(()=>{
        const localTasks = localStorage.getItem("tasks");
        return localTasks ? JSON.parse(localTasks) : [];
    });

    const [tasksState,setTaskState] = useState<ITask[]>(()=>{
        const localTasks = localStorage.getItem("tasks");
        return localTasks ? JSON.parse(localTasks) : [];
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

    const handleSubmit = (e: HandleForm) => {
        e.preventDefault();
        addTasks(newTask[0].name, newTask[0].done);
    };

    const handlekeypressed = (event: React.KeyboardEvent<HTMLInputElement>): void =>{
        setKeyB(event.key);
    };

    const addTasks = (name: string, done: boolean) => {
    if (name !==  "" && keyB === "Enter"){
        const newtasks: ITask[] = [...tasks, { name, done, id: Math.random()}];
        setTasks(newtasks);
        setTaskState(newtasks);
        setNewTask([{name: "", done: false}]);
        }
    };

    const handleDelete = (id: number) => {
        const newtasks: ITask[] = tasks.filter((task) => task.id !== id);
        setTasks(newtasks);
        setTaskState(newtasks);
    };


    const handleDone = (id: number) => {
        const newtasks: ITask[] = tasks.map((task) => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        setTaskState(newtasks);
        setTasks(newtasks);
        setTaskState(newtasks);
    };


    const activeTask = () => {
        const newtasks: ITask[] = tasksState.filter((task) => task.done === false);
        setTasks(newtasks);
    };

    const completedTask = () => {
        const newtasks: ITask[] = tasksState.filter((task) => task.done === true);

        setTasks(newtasks);
    };

    const allTask = () => {
        setTasks(tasksState);
    };

    const clearCompleted = () => {
        const newtasks: ITask[] = tasks.filter((task) => task.done === false);

        setTaskState(prev => prev.filter((task) => task.done === false));
        setTasks(newtasks);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-no-repeat h-72 w-screen bg-cover  mobile:bg-mobile-light dark:mobile:bg-mobile-dark desktop:bg-desktop-light  dark:desktop:bg-desktop-dark">
            <div>
                <TaskTheme/>
            </div>
            <div>
                {/* <TaskForm handlekeypress={handlekeypressed} handleSubmit={handleSubmit}  newTask={setNewTask} newTask={newTask} /> */}
            </div>
            <div>
                <Taskview setTasks={setTasks} setTaskState={setTaskState} activeTask={activeTask} completedTask={completedTask} allTask={allTask} clearCompleted={clearCompleted} handleDone={handleDone} tasks={tasks} handleDelete={handleDelete} />
            </div>
        </div>

    );
};



export default TodoForm;