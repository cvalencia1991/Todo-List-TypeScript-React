import { ITask } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
interface Props {
  tasks: ITask[];
}

const Taskview = ({ tasks }: Props) => {
  return (
    <ul>
          {tasks.map((task) => <li key={task.id}><TaskCard task={task} /></li> )}
    </ul>
  );
};

export default Taskview;
