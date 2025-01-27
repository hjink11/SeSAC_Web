import { TodoItemInterface } from "../../types/interface";
// 위에
/*
id: number;
  text: string;
  done: boolean;
*/

interface Props {
  todo: TodoItemInterface;
  // { id: number; text: string; done: boolean; }
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  console.log(todo);
  return (
    <li>
      <input type="checkbox" onChange={() => toggleComplete(todo.id)} />
      <span>{todo.text}</span>
    </li>
  );
}
