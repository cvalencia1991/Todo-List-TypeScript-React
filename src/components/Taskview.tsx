import { Props } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
import TodoStatus from "./TodoStatus";


const Taskview = ({ tasks, handleDelete }: Props) => {
  return (
    <div className="flex items-center flex-col ">
    <ul className="rounded">
      {tasks.map((task) =>
      <li className="flex items-center justify-between border px-4 bg-white h-12  desktop:w-[40em] mobile:w-80"
      key={task.id}>
        <TaskCard handleDelete={handleDelete}
        task={task} />
      </li>
      )}
    </ul>
      {tasks.length > 0 && <TodoStatus tasks={tasks}/>}
    </div>
  );
};

export default Taskview;
