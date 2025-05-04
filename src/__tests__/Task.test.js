import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Task from '../components/Task';

const mockTask = {
  id: 1,
  text: "Test task",
  category: "Test"
};

const mockDelete = jest.fn();

test("displays the task text", () => {
  render(<Task task={mockTask} onDelete={mockDelete} />);
  expect(screen.getByText(mockTask.text)).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task task={mockTask} onDelete={mockDelete} />);
  expect(screen.getByText(mockTask.category)).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", () => {
  render(<Task task={mockTask} onDelete={mockDelete} />);
  const deleteButton = screen.getByText('X');
  deleteButton.click();
  expect(mockDelete).toHaveBeenCalledWith(mockTask.id);
});