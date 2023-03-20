import React from 'react';

interface TodoListprops {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListprops> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
