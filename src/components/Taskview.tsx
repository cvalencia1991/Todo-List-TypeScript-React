import { ITask } from "../interfaces/ITask";
interface Props {
  tasks: ITask[];
}

const Taskview = ({ tasks }: Props) => {
  console.log(tasks);
  return (
    <>
    <ul>
          {tasks.map((value,index) =>(
            <li key={index} className="flex items-center align-center">
            <h1>{value.name}</h1><button>delete</button>
          </li>
          ))}
        </ul>
    </>
  );
};

export default Taskview;
