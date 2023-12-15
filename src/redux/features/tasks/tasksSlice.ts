import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import initialTaskState from "../../../utils/initialState";
import { Task } from "../../../interfaces/ITask";

// Initial State
const initialState = initialTaskState;

// Reducers
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = [...action.payload];
      state.originalTasks = state.tasks.map((task) => ({ ...task }));
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.originalTasks = state.originalTasks.filter(
        (task) => task.id !== action.payload
      );
    },
    doneTask: (state, action: PayloadAction<number>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      const updatedTasks = [...state.tasks];
      updatedTasks[index].done = !updatedTasks[index].done;
      state.originalTasks = state.originalTasks.map((task) =>
      task.id === action.payload ? { ...task, done: updatedTasks[index].done } : task
      );

      state.tasks = updatedTasks;
    },
    activeTask: (state) => {
      if (state.originalTasks.length === 0) {
        state.originalTasks = state.tasks.map((task) => ({ ...task }));
      }
      state.tasks = state.originalTasks.filter((task) => task.done === false);
    },
    completedTask: (state) => {
      if (state.originalTasks.length === 0) {
        state.originalTasks = state.tasks.map((task) => ({ ...task }));
      }
      state.tasks = state.originalTasks.filter((task) => task.done === true);
    },
    allTask: (state) => {
      state.tasks = state.originalTasks.length > 0 ? state.originalTasks.slice() : state.tasks.slice();
    },
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter((task) => task.done === false);
      state.originalTasks = state.originalTasks.filter(
        (task) => task.done === false
      );
    },
  },
});

// Actions
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

// Selectors
export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;