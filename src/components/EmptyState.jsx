import React from 'react';

const EmptyState = () => {
  return (
    <div className="py-12 px-6 flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 mb-6">
        <img 
          src="https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif" 
          alt="Empty todo list" 
          className="w-full h-full object-cover rounded-lg"
          crossOrigin="anonymous"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">No tasks yet</h3>
      <p className="text-gray-500 max-w-sm mb-6">
        Add your first task using the form above and start being productive today!
      </p>
      <div className="flex flex-col items-center text-sm text-gray-500 space-y-2">
        <div className="flex items-center">
          <i className="bi bi-check-circle text-success mr-2"></i>
          <span>Stay organized</span>
        </div>
        <div className="flex items-center">
          <i className="bi bi-lightning-charge text-yellow-500 mr-2"></i>
          <span>Boost productivity</span>
        </div>
        <div className="flex items-center">
          <i className="bi bi-clock-history text-primary mr-2"></i>
          <span>Track your progress</span>
        </div>
      </div>
    </div>
  );
};

export default EmptyState;
