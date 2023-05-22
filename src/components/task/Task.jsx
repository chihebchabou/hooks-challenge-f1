import React from 'react';

const Task = ({ todo, deleteTask, completeTask }) => {
  const { id, isDone, taskName } = todo;

  //   Delete event handler
  const onDelete = e => deleteTask(id);

  //   Toggle complete task
  const onComplete = e => completeTask(id);
  return (
    <li>
      <span className={isDone === true ? 'completed' : ''} onClick={onComplete}>
        {taskName}
      </span>
      <i className="fa-solid fa-trash-can" onClick={onDelete}></i>
    </li>
  );
};

export default Task;
