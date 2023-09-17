
import { ITask } from "../interfaces/ITask";

interface TaskCardProps {
    task: ITask;
}

const TaskCard = ({task}:TaskCardProps) => {
    return (
        <div>
            <h1>{task.name}</h1>
            <p>{task.id}</p>
            <h2>{task.done}</h2>
            <button>Delete</button>
        </div>
    );
};

export default TaskCard;