'use client';

import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="border border-gray-300 rounded-full py-2 px-4 pl-10 outline-none transition-all duration-300 focus:border-blue-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <HiSearch className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
};

export {SearchBar}