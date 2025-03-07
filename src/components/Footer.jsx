import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-6 border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          <span className="flex items-center justify-center">
            <i className="bi bi-check2-all text-primary mr-2"></i>
            TaskMaster - Designed by WebSparks AI
          </span>
        </p>
        <div className="flex justify-center mt-3 space-x-4">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
