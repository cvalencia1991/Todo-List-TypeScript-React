
import { ChangeEvent } from "react";
import { TaskFormProps } from "../interfaces/ITask";

const TaskForm: React.FC<TaskFormProps> = ({ handleSubmit, setnewTask, newTask }) => {
    return(
        <form onSubmit={handleSubmit}>
        <div className="flex m-3 items-center  justify-center">
          <input
            className="appearance-none block bg-gray-200 text-gray-700 h-10 border rounded leading-tight focus:outline-none focus:bg-white"
            type="text"
            onChange={(e:ChangeEvent<HTMLInputElement>) => setnewTask(e.target.value)}
            value={newTask}
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Save</button>
        </div>
      </form>
    );

};

export default TaskForm;