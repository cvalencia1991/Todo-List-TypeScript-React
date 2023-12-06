import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskTheme from "../components/TaskTheme";
import "@testing-library/jest-dom";

describe("TaskTheme", () => {

  beforeEach(() => {
    render(<TaskTheme />);
  });

  it("should render header", () => {
    screen.debug();
  });

  test("Header the todo", async () => {
    const todoTextElement =  screen.getByText(/TODO/i);
    expect(todoTextElement).toBeInTheDocument();
  });

  test("should render button", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("should change theme", () => {
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    waitFor(() => {
      expect(document.body.classList.contains("dark")).toBe(true);
    });
  });

});