import { useState } from 'react';
import deleteicon from '../../assets/icons8-trash.svg';
import editicon from '../../assets/icons8-edit.svg';

function TodoList({ todos, toggleCompleted, deleteTodo, editTodo }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const handleSave = (index) => {
    editTodo(index, editText);
    setEditIndex(-1);
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {editIndex === index ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(event) => setEditText(event.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <img onClick={() => deleteTodo(index)} src={deleteicon} alt='right-chevron' />
              <img onClick={() => handleEdit(index)} src={editicon} alt='right-chevron' />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
