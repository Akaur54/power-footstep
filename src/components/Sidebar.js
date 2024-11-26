import React, { useState } from 'react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-white border-r dark:bg-gray-900 dark:border-gray-700 ${
        isOpen ? 'w-64' : 'w-20'
      } h-screen transition-all duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-gray-500 dark:text-gray-300 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12' // X icon (close)
                  : 'M4 6h16M4 12h16m-7 6h7' // Hamburger icon (open)
              }
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation Items */}
      <nav className="mt-4 space-y-2">
        {[
          { name: 'Dashboard', path: '/'},
          { name: 'Framework', path: '/framework'},
          { name: 'Analysis', path: '/analysis' },
          { name: 'Settings', path: '/settings' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center px-4 py-2 text-gray-600 rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span className={`ml-4 ${!isOpen && 'hidden'} transition-all`}>
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
