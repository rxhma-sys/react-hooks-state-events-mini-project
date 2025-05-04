import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewTaskForm from '../components/NewTaskForm';
import { CATEGORIES } from '../data';

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const mockSubmit = jest.fn();
  render(<NewTaskForm categories={CATEGORIES.filter(c => c !== "All")} onTaskFormSubmit={mockSubmit} />);
  
  fireEvent.change(screen.getByLabelText(/Details/), {
    target: { value: "New task" }
  });
  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: CATEGORIES[1] }
  });
  fireEvent.submit(screen.getByText(/Add task/));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    text: "New task",
    category: CATEGORIES[1]
  });
});