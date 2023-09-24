


import { Dispatch, KeyboardEvent, SetStateAction } from "react";

export interface ITask {
  name: string;
  id: number;
  done: boolean;
}

export interface Task {
  name: string;
  done: boolean;
}

export interface Props {
  tasks: ITask[];
  handleDelete: (id: number) => void;
}

export type TaskFormType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handlekeypress: (e: KeyboardEvent<HTMLInputElement>) => void;
  setNewTask: Dispatch<SetStateAction<{ name: string; done: boolean; }>>;
  newTask: Task;
};

export interface View {
  handleDelete: (id: number) => void;
  task: ITask[];
  newTask: string;
}

export type HandleForm = React.FormEvent<HTMLFormElement>