import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import EmptyState from './components/EmptyState';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: uuidv4(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-custom overflow-hidden">
          <TodoForm addTodo={addTodo} />
          
          {todos.length > 0 ? (
            <>
              <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo}
              />
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="text-sm text-gray-500">
                  {activeTodosCount} item{activeTodosCount !== 1 ? 's' : ''} left
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1 rounded-md text-sm ${filter === 'all' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setFilter('active')}
                    className={`px-3 py-1 rounded-md text-sm ${filter === 'active' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    Active
                  </button>
                  <button 
                    onClick={() => setFilter('completed')}
                    className={`px-3 py-1 rounded-md text-sm ${filter === 'completed' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    Completed
                  </button>
                </div>
                
                {completedTodosCount > 0 && (
                  <button 
                    onClick={clearCompleted}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Clear completed
                  </button>
                )}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
