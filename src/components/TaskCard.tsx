
import IconCross from "../icons/Iconcross";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TaskCardProps } from "../interfaces/ITask";



const TaskCard = ({task, handleDelete, handleDone }:TaskCardProps) => {

    const [checked, setChecked] = useState<boolean>(task.done);

    const handleChangeCheckbox = () => {
        setChecked(!checked);
        handleDone(task.id);
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
        className="flex items-center justify-between w-full h-full"
        >
            <div className="flex items-center">
                <input
                className="appearance-none w-5 h-5 ml-4 mr-4 cursor-pointer rounded-full border border-[--dark-grayish-blue] checked:bg-gradient-to-r from-[--left-gradient] to-[--right-gradient] "
                type="checkbox"
                onChange={handleChangeCheckbox}
                checked={checked}
                aria-label="Mark as complete"
                />
                <h2 className={`text-[18px] font-josefin text-[--very-dark-grayish-blue] dark:text-[--dark-grayish-blue] ${(checked ? "line-through text-[--very-dark-grayish-blue]" : "")}`}>{task.name}</h2>
            </div>
                <button
                className= {`text-[--light-grayish-blue] hover:text-[--dark-grayish-blue] ${checked ? "hidden": "block"}`}
                aria-label="Delete Task"
                onClick={() => handleDelete(task.id)}>
                <IconCross/>
                </button>
        </div>
    );
};

export default TaskCard;