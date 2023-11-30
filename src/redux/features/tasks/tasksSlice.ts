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
            state.push(action.payload);
        },
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.length = 0;
            state.push(...action.payload);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state = state.filter((task) => task.id !== action.payload);
            return state;
        },
        doneTask: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((task) => task.id === action.payload);
            state[index].done = !state[index].done;
        },
        activeTask: (state) => {
            state = state.filter((task) => task.done === false);
            return state;
        },
        completedTask: (state) => {
            state = state.filter((task) => task.done === true);
            return state;
        },
        allTask: (state) => {
           state = state.filter((task) => task.done === true || task.done === false);
           return state;
        },
        clearCompleted: (state) => {
            state = state.filter((task) => task.done === false);
            return state;
        },
    },
});

//actions
export const { addTask, deleteTask, doneTask, activeTask, setTasks, completedTask, allTask, clearCompleted } = tasksSlice.actions;

//selectors
export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;