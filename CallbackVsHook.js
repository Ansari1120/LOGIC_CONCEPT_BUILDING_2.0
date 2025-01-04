//Custom Callback with use-case 


function debounce(callback, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}

// Usage
const searchHandler = (query) => {
  console.log(`Searching for: ${query}`);
};

const debouncedSearch = debounce(searchHandler, 300);

// Simulate user typing in a search box
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);  // Delays invoking searchHandler
});



//Custom Hook with use-case

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler); // Cleanup on unmount or value change
  }, [value, delay]);

  return debouncedValue;
}

// Usage
import React, { useState } from 'react';
import useDebounce from './useDebounce';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`Searching for: ${debouncedSearchTerm}`); // API call
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
