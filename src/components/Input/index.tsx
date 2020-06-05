import React, { useState, useEffect } from 'react';
import './Input.style.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { acompleteRsp } from '../../utils/responses';
import { Suggestion } from '../../models/autocomplete';
import { SearchIcon } from '../../assets/search';

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
    const filteredValue = event.target.value.replace(/[^A-Za-z]/gi, '');

    setSearch(filteredValue);
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
      <SearchIcon />
      <input
        type="text"
        value={search}
        placeholder="Enter city"
        onChange={handleInput}
        onFocus={toggleSuggestion}
        onBlur={toggleSuggestion}
        pattern="[A-Za-z]"
      />
      <div className="suggestions">
        {showSuggest &&
          suggestions.map((suggestion) => renderSuggestion(suggestion))}
      </div>
    </div>
  );
}
