import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();
  return (
    <main className="py-10 h-screen space-y-16 overflow-y-auto">
      <h1 className="font-bold text-5xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md space-y-6  p-5">
        <TodoForm
          onSubmit={addTodo}
        />
        <TodoList 
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary 
        todos={todos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </main>
  );
}

export default App;
