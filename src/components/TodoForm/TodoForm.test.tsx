import { render, screen, cleanup } from "@testing-library/react";
import TestingForm from "./TodoForm";
import userEvent from "@testing-library/user-event";

describe("TodoForm component", () => {
  beforeEach(() => {
    render(<TestingForm title="Todo list" />);
  });

  afterEach(() => {
    cleanup();
  });

  test("should add two number", () => {
    expect(1 + 1).toBe(2);
  });

  test("should be render title", () => {
    expect(screen.getByText(/todo list/i)).toBeDefined();
  });

  test("should be render form", () => {
    expect(screen.getByRole("form")).toBeDefined();
  });

  test("should be render 1 input", () => {
    expect(screen.getAllByRole("textbox").length).toBe(1);
  });

  test("should be render list", () => {
    expect(screen.getByRole("list")).toBeDefined();
  });

  test("should not be displayed list item if todo list is empty", () => {
    expect(screen.queryAllByRole("listitem").length).toBe(0);
  });

  test("should not be displayed form errors on initialization", () => {
    expect(screen.queryAllByRole("alert").length).toBe(0);
  });

  test("should be displayed form errors on input is empty", async () => {
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.queryAllByRole("alert").length).toBeGreaterThan(0);
  });

  test("should be displayed list item on form submit", async () => {
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Ir al gym");
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(screen.getByText("Ir al gym"));
  });

  test("should be displayed list item on form submit {enter keyboard}", async () => {
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Ir al gym{enter}");
    expect(screen.getByText("Ir al gym"));
  });
});

export {};
