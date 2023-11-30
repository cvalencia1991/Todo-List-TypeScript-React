
import React from "react";
import { useAppDispatch } from "../redux/hooks/hooks";
import { addTask } from "../redux/features/tasks/tasksSlice";


const TaskForm: React.FC = () => {

  const [task, setTask] = React.useState({ name: "", done: false});
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
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex rounded px-4 bg-[--very-light-gray] items-center justify-evenly desktop:h-16 dark:bg-[--very-dark-desaturated-blue]">
            <input
              className={"appearance-none w-6 h-5  ml-3 mr-[10px] cursor-pointer rounded-full desktop:p-3 border border-[--dark-grayish-blue] enabled:focus:border-[--dark-grayish-blue] checked:bg-gradient-to-r bg-no-repeat from-[--left-gradient] to-[--right-gradient]"}
              type="checkbox"
              id="checkbox"
              onChange={() => setTask({ ...task, done: !task.done })}
              aria-label="Mark as complete"
            />
          <input
            type="text"
            className="w-full h-11 ml-1  bg-[--very-light-gray] rounded text-[--dark-gray] placeholder-[--grayish-blue] text-[18px] font-josefin
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