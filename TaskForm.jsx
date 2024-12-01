import React, { useState, useEffect } from 'react';

const TaskForm = ({ taskToEdit, saveTask }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask({ name: taskToEdit.name, description: taskToEdit.description });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      saveTask(task);
      setTask({ name: '', description: '' });
    } else {
      alert('Please fill in both task name and description');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={task.name}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
