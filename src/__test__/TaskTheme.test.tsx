import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskTheme from "../components/TaskTheme";
import "@testing-library/jest-dom";

describe("TaskTheme", () => {
  beforeEach(() => {
    render(<TaskTheme />);
  });

  it("should render header", () => {
    const todoTextElement = screen.getByText(/TODO/i);
    expect(todoTextElement).toBeInTheDocument();
  });

  test("should render button", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should keep dark theme enabled by default", () => {
    expect(document.body.classList.contains("dark")).toBe(true);
  });

  test("should change theme", async () => {
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(document.body.classList.contains("dark")).toBe(false);
  });
});
