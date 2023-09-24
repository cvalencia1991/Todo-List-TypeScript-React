
import IconCross from "../icons/Iconcross";
import { ITask } from "../interfaces/ITask";


interface TaskCardProps {
    task: ITask
    handleDelete: (id: number) => void
}

const TaskCard = ({task, handleDelete }:TaskCardProps) => {

    return (
        <>
            <div className="flex items-center">
                <input
                className="appearance-none w-5 h-5 ml-4 mr-4 cursor-pointer rounded-full border border-[--dark-grayish-blue] checked:bg-gradient-to-r from-[--left-gradient] to-[--right-gradient] "
                type="checkbox"
                checked={task.done}
                />
                <h2 className="font-[18px] text-[--very-dark-grayish-blue]">{task.name}</h2>
            </div>
                <button onClick={() => handleDelete(task.id)}>
                <IconCross/>
                </button>
        </>
    );
};

export default TaskCard;