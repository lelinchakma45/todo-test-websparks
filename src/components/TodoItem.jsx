import React, { useState, useRef, useEffect } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [showActions, setShowActions] = useState(false);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      editTodo(todo.id, editText);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <li 
      className={`border-b border-gray-100 last:border-0 transition-all duration-200 ${
        todo.completed ? 'bg-gray-50' : ''
      }`}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="px-6 py-4 flex items-center">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border ${
            todo.completed 
              ? 'bg-success border-success text-white' 
              : 'border-gray-300 hover:border-primary'
          } flex items-center justify-center transition-colors mr-3`}
        >
          {todo.completed && <i className="bi bi-check text-sm"></i>}
        </button>
        
        {isEditing ? (
          <input
            ref={editInputRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={handleKeyDown}
            className="flex-grow py-1 px-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
          />
        ) : (
          <div className="flex-grow">
            <p className={`text-gray-800 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Added: {formatDate(todo.createdAt)}
            </p>
          </div>
        )}
        
        <div className={`flex space-x-2 transition-opacity ${showActions || isEditing ? 'opacity-100' : 'opacity-0'}`}>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-gray-400 hover:text-primary transition-colors p-1"
              title="Edit"
            >
              <i className="bi bi-pencil"></i>
            </button>
          )}
          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-gray-400 hover:text-error transition-colors p-1"
            title="Delete"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
