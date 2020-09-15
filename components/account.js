import React, { useState, useEffect } from 'react';

export const Account = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);

  return (
    <div>
      <button
        className="z-10 relative block h-8 w-8 overflow-hidden rounded-full border-2 border-gray-600 focus:outline-none focus:border-white"
        onClick={() => setIsOpen(() => !isOpen)}
      >
        <img
          className="h-full w-full object-cover"
          src="https://source.unsplash.com/100x80/?avatar"
          alt="Avatar"
        />
      </button>
      {isOpen && (
        <button
          className="fixed inset-0 h-full w-full bg-black opacity-50 m-0 cursor-default"
          onClick={() => setIsOpen(false)}
          tabIndex="-1"
        ></button>
      )}
      <div
        className={`absolute mt-2 py-2 w-48 bg-white rounded-lg shadow-xl ${
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
