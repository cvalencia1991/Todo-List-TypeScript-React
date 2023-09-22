
import { ITask } from "../interfaces/ITask";


interface TaskCardProps {
    task: ITask
    handleDelete: (id: number) => void
}

const TaskCard = ({task, handleDelete,  }:TaskCardProps) => {


    return (
        <div>
            {/* <input type="checkbox" onChange={(e) =>handleDone(e.target.checked)} /> */}
            <h1>{task.name}</h1>
            <button onClick={() => handleDelete(task.id)}>
            X
            </button>
        </div>
    );
};

export default TaskCard;