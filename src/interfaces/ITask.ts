
import { KeyboardEvent, FormEventHandler } from "react";


export interface ITask {
  name: string;
  id: number;
  done: boolean;
}

export interface Props {
  tasks: ITask[];
  handleDelete: (id: number) => void

}

export interface TaskFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  setnewTask: (value: string) => void;
  handlekeypress: (e: KeyboardEvent<HTMLInputElement>) => void;
  newTask: string;
}


export interface View {
  handleDelete: (id: number) => void;
  task: ITask[];
}