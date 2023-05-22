import Task from './Task';

const TaskList = ({ todos, deleteTask, completeTask }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Task
          todo={todo}
          deleteTask={deleteTask}
          completeTask={completeTask}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TaskList;
