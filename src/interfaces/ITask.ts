
import { keyboardKey } from "@testing-library/user-event";
import { FormEventHandler } from "react";


export interface ITask {
  name: string;
  id: number;
  done: boolean;
}

export interface TaskFormProps {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handlekeypress: (e: keyboardKey) => void
  setnewTask: (value: string) => void;
  newTask: string;
}


export interface View {
  handleDelete: (id: number) => void;
  task: ITask[];
}