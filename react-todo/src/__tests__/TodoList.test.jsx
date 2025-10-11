import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Enter new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");
    // Initially not completed
    expect(todoItem).not.toHaveClass("line-through");

    fireEvent.click(todoItem);
    // After click, should be completed
    expect(todoItem).toHaveClass("line-through");

    fireEvent.click(todoItem);
    // Toggle back
    expect(todoItem).not.toHaveClass("line-through");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Use `within` to scope to the specific <li> element
    const deleteButton = within(todoItem.closest("li")).getByText("Delete");

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
