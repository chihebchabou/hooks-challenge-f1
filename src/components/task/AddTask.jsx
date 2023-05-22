import { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');

  // onChange event handler
  const onTextChange = e => setText(e.target.value);

  //   onClick event handler
  const onAddClicked = e => {
    if (text === '') {
      alert('Please Enter a Task Name');
    } else {
      const newTask = { id: Date.now(), taskName: text, isDone: false };
      addTask(newTask);
      setText('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Add ToDo..."
      />
      <button className="addBtn" onClick={onAddClicked}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
