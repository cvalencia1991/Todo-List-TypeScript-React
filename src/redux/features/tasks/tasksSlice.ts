import { createSlice,PayloadAction  } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import initialTaskState from "../../../utils/initialState";
import { Task } from "../../../interfaces/ITask";


//Initial State
const initialState = initialTaskState;

//reducers
export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks.length = 0;
            state.tasks.push(...action.payload);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            if (index !== -1) {
                state.tasks.splice(index, 1);
            }
        },
        doneTask: (state, action: PayloadAction<number>) => {
            const index = state.tasks.findIndex((task) => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        activeTask: (state) => {
            state.originalTasks = state.tasks.slice();
            state.tasks = state.tasks.filter((task) => task.done === false);
          },
          completedTask: (state) => {
            state.originalTasks = state.tasks.slice();
            state.tasks = state.tasks.filter((task) => task.done === true);
          },
          allTask: (state) => {
            state.tasks = state.originalTasks.slice();
          },
        clearCompleted: (state) => {
            state.tasks = state.tasks.filter((task) => task.done === false);
            state.originalTasks = state.originalTasks.filter((task) => task.done === false);
        },
    },
});

//actions
export const { addTask, deleteTask, doneTask, activeTask, setTasks, completedTask, allTask, clearCompleted } = tasksSlice.actions;

//selectors
export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;