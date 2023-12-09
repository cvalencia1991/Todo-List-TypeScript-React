
import React, { useState } from "react";
import { useAppDispatch } from "../redux/hooks/hooks";
import { addTask } from "../redux/features/tasks/tasksSlice";


const TaskForm: React.FC = () => {

  const [task, setTask] = useState({ name: "", done: false});
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = document.getElementById("todo") as HTMLInputElement;
    if (task.name.trim() === ""){
      input.placeholder = "Please enter a task";
      input.classList.add("placeholder-red-500");
      return;
    }else{
      input.classList.remove("placeholder-red-500");
      dispatch(addTask({...task,id:Math.random()}));
      setTask({ name: "", done: false });
    }

  };

  return (
    <div className=" flex w-full">
      <form className="flex w-full" onSubmit={handleSubmit}>
        <div className="flex w-full rounded px-4 bg-[--very-light-gray] items-center justify-evenly desktop:h-16 dark:bg-[--very-dark-desaturated-blue]">
          <div className={`flex items-center justify-center mx-4 w-6 h-5 desktop:w-6 desktop:h-5 ${task.done ? "bg-gradient-to-r from-[--left-gradient] to-[--right-gradient] rounded-full": "bg-transparent border rounded-full hover:border-gradient-to-r hover:from-[--left-gradient] hover:to-[--right-gradient]"}`}>
            <input
            className={`appearance-none cursor-pointer p-2 border-none border-[--dark-grayish-blue] enabled:focus:border-[--dark-grayish-blue] ${task.done ? "checked:bg-icon-check bg-no-repeat bg-center touch-none": ""}`}
            type="checkbox"
            id="checkbox"
            onChange={() => setTask({ ...task, done: !task.done })}
            aria-label="Mark as complete"
          />
          </div>
          <input
            type="text"
            className="w-full h-11 bg-[--very-light-gray] rounded text-[--dark-gray] placeholder-[--grayish-blue] text-[18px] font-josefin
            focus:outline-none caret-[--very-dark-blue] hover:border-none hover:text-[--dark-gray] dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]"
            placeholder="Create a new todo..."
            aria-label="Create a new todo..."
            id="todo"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;