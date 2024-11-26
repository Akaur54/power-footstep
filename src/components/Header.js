import React from 'react';

function Header() {
  return (
    <header className="bg-white">
      <div className="flex items-center justify-between p-4">
        {/* Left-side links (Home, About, Contact) */}
        <div className="flex space-x-4">
          <a href="/" className="text-gray-800 hover:text-blue-600">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-blue-600">
            About
          </a>
        </div>

        {/* Right-side input and user avatar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring"
          />
          
          {/* User avatar */}
          <div className="flex items-center gap-x-6">
            <img
              className="object-cover w-16 h-16 rounded-full"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
