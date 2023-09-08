export type TodoItemType = {
  id: string;
  completed: boolean;
  name: string;
}

export type TodoContextType = {
  todos: TodoItemType[];
  addTodoHandler: (text: string) => void;
  toggleTodoHandler: (id: string) => void;
};