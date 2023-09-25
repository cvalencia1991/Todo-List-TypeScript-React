import { TaskItem } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
import TodoStatus from "./TodoStatus";



const Taskview = ({ tasks, activeTask, completedTask,allTask,clearCompleted, handleDelete, handleDone }: TaskItem) => {

  return (
    <div className="flex items-center flex-col ">
    <ul className="rounded">
      {tasks.map((task) =>
      <li className="flex items-center justify-between border px-4 bg-white h-12  desktop:w-[40em] mobile:w-80 dark:bg-[--very-dark-desaturated-blue] dark:border-[--light-grayish-blue]"
      key={task.id}>
        <TaskCard handleDelete={handleDelete}
        handleDone={handleDone}
        task={task} />
      </li>
      )}
    </ul>
      {tasks.length > 0 &&
      <TodoStatus
      activeTask={activeTask}
      completedTask={completedTask}
      allTask={allTask}
      clearCompleted={clearCompleted}
      tasks={tasks}
      />}
    </div>
  );
};

export default Taskview;
