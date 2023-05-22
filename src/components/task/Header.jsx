import AddTask from './AddTask';

const Header = ({ addTask }) => {
  return (
    <header className="my-todos">
      <h1 className="title">My ToDo List</h1>
      {/* AddTask Component */}
      <AddTask addTask={addTask} />
    </header>
  );
};

export default Header;
