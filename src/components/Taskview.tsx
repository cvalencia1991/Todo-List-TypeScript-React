import { ITask } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
interface Props {
  tasks: ITask[];
  handleDelete: (id: number) => void
}

const Taskview = ({ tasks, handleDelete }: Props) => {
  return (
    <ul>
          {tasks.map((task) => <li key={task.id}><TaskCard handleDelete={handleDelete} task={task} /></li> )}
    </ul>
  );
};

export default Taskview;
