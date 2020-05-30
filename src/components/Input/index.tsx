import React, { useState, useEffect } from 'react';
import './Input.style.css';
import { useDebounce } from '../../hooks/useDebounce';
import { acompleteRsp } from '../../data/responses';
import { Suggestion } from '../../models/autocomplete';

export function Input() {
  const [search, setSearch] = useState('');

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const [showSuggest, setShowSuggest] = useState(false);

  const toggleSuggestion = () => setShowSuggest(!showSuggest);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(
    () => {
      if (debouncedSearch) {
        setSuggestions(acompleteRsp);
      } else {
        setSuggestions([]);
      }
    },

    [debouncedSearch] // Only call effect if debounced search term changes
  );

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function handleSelectSuggest() {
    console.log('Selected');
  }

  function renderSuggestion(suggestion: Suggestion) {
    return (
      <div
        className="suggestion"
        key={suggestion.LocalizedName}
        onClick={handleSelectSuggest}
      >
        {suggestion.LocalizedName}
      </div>
    );
  }

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={search}
        placeholder="Enter city"
        onChange={handleInput}
        onFocus={toggleSuggestion}
        onBlur={toggleSuggestion}
      />
      <div className="suggestions">
        {showSuggest &&
          suggestions.map((suggestion) => renderSuggestion(suggestion))}
      </div>
    </div>
  );
}
