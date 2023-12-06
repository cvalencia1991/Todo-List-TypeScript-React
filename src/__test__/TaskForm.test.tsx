
import TaskForm from "../components/TaskForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("TaskForm", () => {
    it("should render input", () => {
        render(
            <Provider store={store}>
                <TaskForm />
            </Provider>
        );
        const inputElement = screen.getByPlaceholderText(/Create a new todo.../i);
        expect(inputElement).toBeInTheDocument();
    });
    it("should add a tasks", () => {
        render(
            <Provider store={store}>
                <TaskForm />
            </Provider>
        );
        const inputElement = screen.getByPlaceholderText(/Create a new todo.../i);
        userEvent.type(inputElement, "Learn Testing{enter}");
        waitFor(() => {
            expect(screen.getByText(/Learn Testing/i)).toBeInTheDocument();
        });
    });
});