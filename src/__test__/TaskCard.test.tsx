
import TaskCard from "../components/TaskCard";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("TaskCard", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <TaskCard task={{id:1,name:"Learn Testing",done:false}} />
            </Provider>
        );
    });
    it("should render task card", () => {
        const inputElement = screen.getByText(/Learn Testing/i);
        expect(inputElement).toBeInTheDocument();
    });
    it("should change checkbox", () => {
        const inputElement = screen.getByLabelText(/Mark as complete/i);
        userEvent.click(inputElement);
        waitFor(() => {
            expect(inputElement).toBeChecked();
        });
    });
    it("should delete task", () => {
        const inputElement = screen.getByLabelText(/Delete task/i);
        userEvent.click(inputElement);
        waitFor(() => {
            expect(screen.queryByText(/Learn Testing/i)).not.toBeInTheDocument();
        });
    });
});
