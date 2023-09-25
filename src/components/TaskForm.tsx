
import React from "react";
import { TaskFormType } from "../interfaces/ITask";


const TaskForm: React.FC<TaskFormType> = ({ handleSubmit, handlekeypress, setNewTask, newTask }) => (
  <form onSubmit={handleSubmit}>
    <div className="container flex rounded px-4 bg-[--very-light-gray] items-center justify-evenly dark:bg-[--very-dark-desaturated-blue]">
        <input
          className="appearance-none w-5 h-5 ml-4 mr-4 cursor-pointer rounded-full border border-[--dark-grayish-blue]
          enabled:focus:border-[--dark-grayish-blue]
          checked:bg-gradient-to-r bg-no-repeat from-[--left-gradient] to-[--right-gradient] "
          type="checkbox"
          onChange={(e) => setNewTask({ ...newTask, done: e.target.checked })}
          checked={newTask.done}
        />
      <input
        type="text"
        className="w-full h-11  bg-[--very-light-gray] rounded text-[--dark-gray] placeholder-[--grayish-blue] text-[18px] font-josefin
        focus:outline-none caret-[--very-dark-blue] hover:border-none hover:text-[--dark-gray]  dark:bg-[--very-dark-desaturated-blue] dark:text-[--light-grayish-blue]"
        placeholder="Create a new todo..."
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        value={newTask.name}
        onKeyDown={handlekeypress}
      />
    </div>
  </form>
);

export default TaskForm;