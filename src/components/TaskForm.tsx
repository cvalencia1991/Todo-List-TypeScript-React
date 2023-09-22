
import { ChangeEvent } from "react";
import { TaskFormProps } from "../interfaces/ITask";


const TaskForm: React.FC<TaskFormProps> = ({ handleSubmit,  handlekeypress, setnewTask, newTask }) => (
  <form onSubmit={handleSubmit}>
    <div className="flex m-3 items-center  justify-center">
      <input
        className="appearance-none block bg-desk-light text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setnewTask(e.target.value)}
        value={newTask}
        onKeyDown={handlekeypress} />
    </div>
  </form>
);

export default TaskForm;