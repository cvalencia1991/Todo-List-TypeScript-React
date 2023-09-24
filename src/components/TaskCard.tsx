
import IconCross from "../icons/Iconcross";
import { ITask } from "../interfaces/ITask";


interface TaskCardProps {
    task: ITask
    handleDelete: (id: number) => void
}

const TaskCard = ({task, handleDelete }:TaskCardProps) => {

    return (
        <div className="flex justify-around bg-white border-b-4 w-[20em]">
            <form>
            <input
                className="appearance-none w-5 h-5 ml-4 mr-4 cursor-pointer rounded-full border border-[--grayish-blue] checked:bg-gradient-to-r from-[--left-gradient] to-[--right-gradient] "
            type="checkbox"
            checked={task.done}
        />
            </form>
          
            <h1>{task.name}</h1>
            <button onClick={() => handleDelete(task.id)}>
            <IconCross/>
            </button>
        </div>
    );
};

export default TaskCard;