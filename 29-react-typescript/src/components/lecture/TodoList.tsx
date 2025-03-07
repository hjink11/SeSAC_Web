import React, { useRef, useState } from "react";
import { TodoItemInterface } from "../../types/interface";
import TodoItem from "./TodoItem";
export default function TodoList() {
  // todo List를 담을 state
  const [todos, setTodos] = useState<TodoItemInterface[]>([]);

  // 새로운 todo 아이템의 텍스트를 받을 state (input의 value와 onchange)
  const [newTodo, setNewTodo] = useState<string>("");

  // input 태그에 접근하기 위한 ref 객체 생성
  const inputRef = useRef<HTMLInputElement>(null);

  /* 새로운 todo 추가 */
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      // 공백이 아니라면
      const updatedTodo = [
        ...todos, // 기본 리스트에 아래를 추가
        {
          id: Date.now(),
          text: newTodo,
          done: false,
        },
      ];

      setTodos(updatedTodo);
      setNewTodo("");
      focusInput();
    }
  };
  /* todo 아이템 완료 state 변경  체크박스로 */
  const toggleComplete = (id: number) => {
    const updatedTodo = todos.map((todo) => {
      //todo.id와 들어오는 id가 같다면 done 값을 반대로 변경
      return todo.id === id ? { ...todo, done: !todo.done } : todo;
    });

    setTodos(updatedTodo);
  };

  /* 엔터 눌렀을 때 todo 추가 */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      //nativeEvent은 맥에서 한글오류?땜시
      addTodo();
    }
  };

  /* input 포커스 처리하기  !!! 꼭 ? 하기*/
  const focusInput = () => {
    inputRef.current?.focus();
  };

  // todo리스트 확인
  console.log(todos);

  return (
    <div style={{ backgroundColor: "#00ff0022" }}>
      <h2>TodoList</h2>
      <input
        type="text"
        ref={inputRef}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="새로운 투두 작성"
      />
      <button onClick={addTodo}>추가</button>
      <button onClick={focusInput}>포커스</button>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>

      <h2>DoneList</h2>
      <ul>
        {/* done 값이 true 것 그리기 */}
        {todos
          .filter((todo) => todo.done === true)
          .map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
      </ul>
    </div>
  );
}
