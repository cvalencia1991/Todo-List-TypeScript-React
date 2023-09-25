import { TaskItem } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
import TodoStatus from "./TodoStatus";



const Taskview = ({ tasks, activeTask, completedTask,allTask,clearCompleted, handleDelete, handleDone }: TaskItem) => {

  return (
    <div className="flex items-center flex-col ">
    <ul className="rounded">
      {tasks.map((task,index) =>
      <li
        className={`flex items-center justify-between border-b px-4 bg-white h-12  font-josefin
        desktop:w-[36em] mobile:w-80 dark:bg-[--very-dark-desaturated-blue] text-[18px]
        dark:border-[--light-grayish-blue] ${index === 0 ? "first:rounded-t" : ""}`}
        key={task.id}>
        <TaskCard handleDelete={handleDelete}
        handleDone={handleDone}
        task={task} />
      </li>
      )}
    </ul>
      <TodoStatus
      activeTask={activeTask}
      completedTask={completedTask}
      allTask={allTask}
      clearCompleted={clearCompleted}
      tasks={tasks}
      />
    </div>
  );
};

export default Taskview;
