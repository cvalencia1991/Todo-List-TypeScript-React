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

export interface TaskItem {
  tasks: ITask[];
  handleDelete: (id: number) => void;
  handleDone: (id: number) => void;
  activeTask: () => void;
  completedTask: () => void;
  allTask: () => void;
  clearCompleted: () => void;

}

export interface TodoStatusProps {
  tasks: Task[]
  activeTask: () => void;
  completedTask: () => void;
  allTask: () => void;
  clearCompleted: () => void;
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