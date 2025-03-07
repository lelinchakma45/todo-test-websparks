import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary py-8 shadow-md">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className="bi bi-check2-square text-white text-3xl mr-3"></i>
            <h1 className="text-2xl md:text-3xl font-bold text-white">TaskMaster</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-white/80 flex items-center">
              <i className="bi bi-calendar-check mr-2"></i>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </span>
          </div>
        </div>
        <p className="text-white/80 mt-2 max-w-lg">Organize your tasks efficiently and boost your productivity</p>
      </div>
    </header>
  );
};

export default Header;
