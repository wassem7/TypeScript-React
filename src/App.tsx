import React, { useState } from 'react';
import NewTodo from './Components/NewTodo';
import TodoList from './Components/TodoList';
import { Todo } from './Todo.model';
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const sumbitHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random.toString(), text },
    ]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div>
      <NewTodo addTodoHandler={sumbitHandler} />
      <TodoList
        items={todos}
        onDeleteHandler={deleteTodoHandler}
      />
    </div>
  );
};

export default App;
