import React, { useRef } from 'react';
interface addTodoHandlerInterface {
  addTodoHandler: (text: string) => void;
}
const NewTodo: React.FC<addTodoHandlerInterface> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    props.addTodoHandler(enteredText);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
