import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-6">React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
