import { Fragment, useState } from 'react';
import Header from './components/task/Header';
import TaskList from './components/task/TaskList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, taskName: 'task 1', isDone: false },
    { id: 2, taskName: 'task 2', isDone: true },
  ]);

  const addTask = newTask => {
    console.log(newTask);
    setTodos(prev => [...prev, newTask]);
  };

  const deleteTask = id => {
    console.log(id);
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const completeTask = id =>
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  return (
    <Fragment>
      {/* Header Section */}
      <Header addTask={addTask} />
      {/* TaskList Section */}
      <TaskList
        todos={todos}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </Fragment>
  );
}

export default App;
