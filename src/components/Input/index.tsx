import React, { useState, useEffect, useRef } from 'react';
import './Input.style.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { Suggestion } from '../../models/autocomplete';
import { SearchIcon } from '../../assets/search';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { setCity, setCityId } from '../../store/app.reducer';
import useClickOutside from '../../hooks/useClickOutside';

export function Input() {
  const dispatch = useDispatch();

  const input = useRef(null);

  const [search, setSearch] = useState('');

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const [showSuggest, setShowSuggest] = useState(false);

  const showSuggestion = () => setShowSuggest(true);

  const hideSuggestion = () => setShowSuggest(false);

  const debouncedSearch = useDebounce(search, 500);

  useClickOutside(input, hideSuggestion);

  useEffect(() => {
    if (debouncedSearch) {
      axios({
        url: `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
        method: 'get',
        params: {
          apikey: '1EU24RLGj7iLDBCueRlAb5l26LOwusoH',
          language: 'en-us',
          q: debouncedSearch,
        },
      }).then((res: AxiosResponse) => {
        console.log(res.data);
        setSuggestions(res.data as Suggestion[]);
      });
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearch]);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const filteredValue = event.target.value.replace(/[^A-Za-z]/gi, '');

    setSearch(filteredValue);
  }

  function handleSelectSuggest(city: string, cityId: string) {
    return function click() {
      dispatch(setCity(city));
      dispatch(setCityId(cityId));
      setSearch('');
      hideSuggestion();
    };
  }

  function renderSuggestion(suggestion: Suggestion) {
    return (
      <div
        className="suggestion"
        key={suggestion.LocalizedName}
        onClick={handleSelectSuggest(suggestion.LocalizedName, suggestion.Key)}
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
        onFocus={showSuggestion}
        ref={input}
        pattern="[A-Za-z]"
      />
      <div className="suggestions">
        {showSuggest &&
          suggestions.map((suggestion) => renderSuggestion(suggestion))}
      </div>
    </div>
  );
}
