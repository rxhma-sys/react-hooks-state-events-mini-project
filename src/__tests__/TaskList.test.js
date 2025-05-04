import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskList from '../components/TaskList';
import { TASKS } from '../data';

test("displays all items when initially rendered", () => {
  render(<TaskList tasks={TASKS} onDeleteTask={() => {}} />);
  TASKS.forEach(task => {
    expect(screen.getByText(task.text)).toBeInTheDocument();
  });
});

test("passes correct task id when deleted", () => {
  const mockDelete = jest.fn();
  render(<TaskList tasks={TASKS} onDeleteTask={mockDelete} />);
  const firstTaskDeleteButton = screen.getAllByText('X')[0];
  firstTaskDeleteButton.click();
  expect(mockDelete).toHaveBeenCalledWith(TASKS[0].id);
});