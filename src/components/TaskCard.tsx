
import { ITask } from "../interfaces/ITask";

interface TaskCardProps {
    task: ITask;
    handleDelete: (id: number) => void
}

const TaskCard = ({task, handleDelete}:TaskCardProps) => {
    return (
        <div>
            <h1>{task.name}</h1>
            <h2>{task.done}</h2>
            <button onClick={handleDelete.bind(null,task.id)}>Delete</button>
        </div>
    );
};

export default TaskCard;