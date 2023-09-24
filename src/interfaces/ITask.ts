import React from "react";

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

export interface TodoStatusProps {
  tasks: Task[]
}


export type TaskFormType = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handlekeypress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  setNewTask: (value: React.SetStateAction<Task>) => void;
  newTask: Task;
};

export interface View {
  handleDelete: (id: number) => void;
  task: ITask[];
  newTask: string;
}

export type HandleForm = React.FormEvent<HTMLFormElement>