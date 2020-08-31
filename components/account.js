import React from 'react';

export const Account = () => (
  <div>
    <button className="block h-8 w-8 overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="https://source.unsplash.com/100x80/?avatar"
        alt="Avatar"
      />
    </button>
    <div>
      <a className="text-gray-100" href="#">
        Account settings
      </a>
      <a href="#">Support</a>
      <a href="#">Sign out</a>
    </div>
  </div>
);
