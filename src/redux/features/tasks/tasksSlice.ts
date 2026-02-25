import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import initialTaskState from "../../../utils/initialState";
import { Task } from "../../../interfaces/ITask";

const initialState = initialTaskState;

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      state.originalTasks.push(action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = [...action.payload];
      state.originalTasks = action.payload.map((task) => ({ ...task }));
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.originalTasks = state.originalTasks.filter(
        (task) => task.id !== action.payload
      );
    },
    doneTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
      state.originalTasks = state.originalTasks.map((task) =>
        task.id === action.payload ? { ...task, done: !task.done } : task
      );
    },
    activeTask: (state) => {
      state.tasks = state.originalTasks.filter((task) => !task.done);
    },
    completedTask: (state) => {
      state.tasks = state.originalTasks.filter((task) => task.done);
    },
    allTask: (state) => {
      state.tasks = state.originalTasks.slice();
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => !task.done);
      state.originalTasks = state.originalTasks.filter((task) => !task.done);
    },
  },
});

export const {
  addTask,
  deleteTask,
  doneTask,
  activeTask,
  setTasks,
  completedTask,
  allTask,
  clearCompleted,
} = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
