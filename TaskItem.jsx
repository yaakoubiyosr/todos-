import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCompletion, editTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => toggleCompletion(task.id)}>
        {task.completed ? '✅' : '◻️'} {task.name}
      </div>
      <button onClick={() => editTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
