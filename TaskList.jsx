import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleCompletion, editTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompletion={toggleCompletion}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
