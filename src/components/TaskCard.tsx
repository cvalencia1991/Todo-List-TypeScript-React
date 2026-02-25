import IconCross from "../icons/Iconcross";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Task } from "../interfaces/ITask";
import { useAppDispatch } from "../redux/hooks/hooks";
import { deleteTask, doneTask } from "../redux/features/tasks/tasksSlice";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const dispatch = useAppDispatch();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      {...listeners}
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between w-full"
    >
      <div className="flex items-center">
        <div
          className={`flex items-center w-5 h-5 justify-center mx-4 ${
            task.done
              ? "bg-gradient-to-r from-[--left-gradient] to-[--right-gradient] rounded-full"
              : "bg-transparent border rounded-full hover:border-gradient-to-r hover:from-[--left-gradient] hover:to-[--right-gradient]"
          }`}
        >
          <input
            className="appearance-none p-2 mx-4 cursor-pointer rounded-full desktop:p-3 checked:bg-icon-check bg-no-repeat bg-center touch-none"
            type="checkbox"
            id={task.id.toString()}
            onChange={() => dispatch(doneTask(task.id))}
            checked={task.done}
            aria-label="Mark as complete"
          />
        </div>
        <h2
          className={`text-base w-auto font-josefin text-[--very-dark-grayish-blue] dark:text-[--dark-grayish-blue] ${
            task.done ? "line-through text-[--very-dark-grayish-blue]" : ""
          }`}
        >
          {task.name}
        </h2>
      </div>
      <button
        className={`text-[--light-grayish-blue] hover:text-[--dark-grayish-blue] ${
          task.done ? "hidden" : "block"
        }`}
        aria-label="Delete Task"
        onClick={() => dispatch(deleteTask(task.id))}
      >
        <IconCross />
      </button>
    </div>
  );
};

export default TaskCard;
