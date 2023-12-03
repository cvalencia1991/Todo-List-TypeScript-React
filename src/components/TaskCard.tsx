
import IconCross from "../icons/Iconcross";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../interfaces/ITask";
import { useAppDispatch } from "../redux/hooks/hooks";
import { deleteTask,doneTask } from "../redux/features/tasks/tasksSlice";

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({task}) => {

    const dispatch = useAppDispatch();
    const [checked, setChecked] = useState<boolean>(task.done);

    const handleChangeCheckbox = () => {
        setChecked(!checked);
        dispatch(doneTask(task.id));

    };
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };


    return (
        < div
        {...listeners}
        ref={setNodeRef}
        style={style}
        {...attributes}
        className="flex items-center justify-between w-full"
        >
            <div className="flex items-center">
                <input
                className="appearance-none w-5 h-5  ml-4 mr-4 cursor-pointer rounded-full desktop:p-3 border border-[--dark-grayish-blue] checked:bg-icon-check bg-no-repeat bg-center touch-none"
                type="checkbox"
                id={task.id.toString()}
                onChange={handleChangeCheckbox}
                checked={checked}
                aria-label="Mark as complete"
                />
                <h2 className={`text-[18px] font-josefin text-[--very-dark-grayish-blue] dark:text-[--dark-grayish-blue] ${(checked ? "line-through text-[--very-dark-grayish-blue]" : "")}`}>{task.name}</h2>
            </div>
                <button
                className= {`text-[--light-grayish-blue] hover:text-[--dark-grayish-blue] ${checked ? "hidden": "block"}`} aria-label="Delete Task"
                onClick={() => dispatch(deleteTask(task.id))}
                >
                <IconCross/>
                </button>
        </div>
    );
};

export default TaskCard;