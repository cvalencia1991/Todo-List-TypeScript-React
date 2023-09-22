import { ITask } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
import TodoStatus from "./TodoStatus";


interface Props {
  tasks: ITask[];
  handleDelete: (id: number) => void

}

const Taskview = ({ tasks, handleDelete }: Props) => {
  return (
    <div className="flex items-center flex-col">
    <ul>
      {tasks.map((task) => <li key={task.id}><TaskCard handleDelete={handleDelete} task={task} /></li>)}
    </ul>
    <TodoStatus />
    </div>
  );
};

export default Taskview;
