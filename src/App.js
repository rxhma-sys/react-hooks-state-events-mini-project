import React, { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";

import { CATEGORIES, TASKS } from "./data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const filteredTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList 
        tasks={filteredTasks} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;