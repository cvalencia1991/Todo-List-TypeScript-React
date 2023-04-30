
import { ITask } from "../interfaces/ITask";
interface Props {
  tasks : ITask[]
}

const Taskview = ({tasks}:Props) => {
  console.log(tasks);
  return (
    <>
    {tasks.map((value)=>{
      return(
      <div>
        <h1>{value.name}</h1>
      </div>
      );
    })}
    </>
  );
};

export default Taskview;
