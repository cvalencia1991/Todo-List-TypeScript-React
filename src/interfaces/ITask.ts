
export interface Task {
  name: string;
  id: number;
  done: boolean;
}

export interface State {
  tasks: Task[];
  originalTasks: Task[];
}