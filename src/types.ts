export type TodoItemType = {
  id: string;
  completed: boolean;
  name: string;
};

export enum TodoStatus {
  All,
  Active,
  Completed,
}

export type TodoContextType = {
  todos: TodoItemType[];
  status: TodoStatus;
  activeTasks: TodoItemType[];
  completedTasks: TodoItemType[];
  addTodoHandler: (text: string) => void;
  toggleTodoHandler: (id: string) => void;
  changeStatusHandler: (currentStatus: TodoStatus) => void;
  removeCompletedHandler: () => void;
};
