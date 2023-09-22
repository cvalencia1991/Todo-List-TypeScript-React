
import { ChangeEvent } from "react";
import { TaskFormProps } from "../interfaces/ITask";


const TaskForm: React.FC<TaskFormProps> = ({ handleSubmit,  handlekeypress, setnewTask, newTask }) => (
  <form onSubmit={handleSubmit}>
    <div className="flex m-3 items-center  justify-center">
      <input
        className="appearance-none block bg-[light_gray] text-gray-700 h-10 border rounded leading-tight focus:outline-none focus:bg-white"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setnewTask(e.target.value)}
        value={newTask}
        onKeyDown={handlekeypress} />
    </div>
  </form>
);

export default TaskForm;