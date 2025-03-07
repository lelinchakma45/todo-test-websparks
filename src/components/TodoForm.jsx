import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="p-6 border-b border-gray-100">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className={`flex-grow relative ${isInputFocused ? 'ring-2 ring-primary/30 rounded-lg' : ''}`}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            placeholder="Add a new task..."
            className="w-full py-3 px-4 rounded-lg border border-gray-200 focus:outline-none focus:border-primary transition-colors"
          />
          {text.length > 0 && (
            <button
              type="button"
              onClick={() => setText('')}
              className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <i className="bi bi-x-circle"></i>
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={!text.trim()}
          className={`ml-3 px-5 py-3 rounded-lg bg-primary text-white font-medium flex items-center transition-all ${
            !text.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
          }`}
        >
          <i className="bi bi-plus-lg mr-1"></i>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
