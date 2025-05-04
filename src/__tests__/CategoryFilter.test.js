import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryFilter from '../components/CategoryFilter';
import { CATEGORIES } from '../data';

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={() => {}} />);
  CATEGORIES.forEach(category => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test("applies 'selected' class to the selected category", () => {
  const selectedCategory = "Food";
  render(
    <CategoryFilter 
      categories={CATEGORIES} 
      selectedCategory={selectedCategory} 
      onSelectCategory={() => {}} 
    />
  );
  const selectedButton = screen.getByText(selectedCategory);
  expect(selectedButton).toHaveClass('selected');
});