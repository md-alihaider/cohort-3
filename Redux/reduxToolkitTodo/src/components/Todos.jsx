import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Stats from "./Stats";
import TodoCard from "./TodoCard";
import EmptyState from "./EmptyState";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Todos</h2>

        <p className="text-gray-500">Manage all your tasks in one place.</p>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Stats */}
      <Stats />

      {/* Todo List */}
      <div className="space-y-4">
        {todos.length > 0 ? (
          todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Todos;
