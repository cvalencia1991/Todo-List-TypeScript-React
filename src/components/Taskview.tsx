import { ITask } from "../interfaces/ITask";
import TaskCard from "./TaskCard";
interface Props {
  tasks: ITask[];
}

const Taskview = ({ tasks }: Props) => {
  return (
    <>
          {tasks.map((task) => <TaskCard task={task} /> )}
    </>
  );
};

export default Taskview;
