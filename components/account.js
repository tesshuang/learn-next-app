import React, { useState } from 'react';

export const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="block h-8 w-8 overflow-hidden rounded-full border-2 border-gray-600 focus:outline-none focus:border-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          className="h-full w-full object-cover"
          src="https://source.unsplash.com/100x80/?avatar"
          alt="Avatar"
        />
      </button>
      <div
        className={`mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-teal hover:text-gray-200"
        >
          Account settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-teal hover:text-gray-200"
        >
          Support
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-800 hover:bg-teal hover:text-gray-200"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};
