
import IconCross from "../icons/Iconcross";
import { ITask } from "../interfaces/ITask";
import { useState } from "react";


interface TaskCardProps {
    task: ITask
    handleDelete: (id: number) => void
    handleDone: (id: number) => void
}

const TaskCard = ({task, handleDelete, handleDone }:TaskCardProps) => {

    const [checked, setChecked] = useState<boolean>(task.done);

    const handleChangeCheckbox = () => {
        setChecked(!checked);
        handleDone(task.id);
    };

    return (
        <>
            <div className="flex items-center">
                <input
                className="appearance-none w-5 h-5 ml-4 mr-4 cursor-pointer rounded-full border border-[--dark-grayish-blue] checked:bg-gradient-to-r from-[--left-gradient] to-[--right-gradient] "
                type="checkbox"
                onChange={handleChangeCheckbox}
                checked={checked}
                />
                <h2 className={`text-[18px] font-josefin text-[--very-dark-grayish-blue] mobile:text-[14px] dark:text-[--light-grayish-blue] ${(checked ? "line-through" : "")}`}>{task.name}</h2>
            </div>
                <button className= {`text-[--light-grayish-blue] hover:text-[--dark-grayish-blue] ${checked ? "hidden": "block"}`}
                onClick={() => handleDelete(task.id)}>
                <IconCross/>
                </button>
        </>
    );
};

export default TaskCard;