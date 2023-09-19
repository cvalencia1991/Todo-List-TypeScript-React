
import { FormEventHandler } from "react";


export interface ITask {
  name: string;
  id: number;
  done: boolean;
}

export interface TaskFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  setnewTask: (value: string) => void;
  newTask: string;
}


