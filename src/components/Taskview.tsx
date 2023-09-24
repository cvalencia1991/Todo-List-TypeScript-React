import { Props } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
import TodoStatus from "./TodoStatus";


const Taskview = ({ tasks, handleDelete }: Props) => {
  return (
    <div className="flex items-center flex-col ">
    <ul className="rounded">
      {tasks.map((task) =>
      <li key={task.id}>
        <TaskCard handleDelete={handleDelete}
        task={task} />
      </li>
      )}
    </ul>
      {tasks.length > 0 && <TodoStatus/>}
    </div>
  );
};

export default Taskview;
