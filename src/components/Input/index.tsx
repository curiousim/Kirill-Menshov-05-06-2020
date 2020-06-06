import React, { useState, useEffect, useRef } from 'react';
import './Input.style.scss';
import { useDebounce } from '../../hooks/useDebounce';
import { Suggestion } from '../../models/autocomplete';
import { SearchIcon } from '../../assets/search';
import axios, { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { setCity, setCityId } from '../../store/app.reducer';
import useClickOutside from '../../hooks/useClickOutside';
import { useToasts } from 'react-toast-notifications';

export function Input() {
  const dispatch = useDispatch();

  const input = useRef(null);

  const [search, setSearch] = useState('');

  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const [showSuggest, setShowSuggest] = useState(false);

  const showSuggestion = () => setShowSuggest(true);

  const hideSuggestion = () => setShowSuggest(false);

  const debouncedSearch = useDebounce(search, 500);

  const { addToast } = useToasts();

  useClickOutside(input, hideSuggestion);

  useEffect(() => {
    if (debouncedSearch) {
      axios({
        url: `https://dataservice.accuweather.com/locations/v1/cities/autocomplete`,
        method: 'get',
        params: {
          apikey: process.env.REACT_APP_ACCU_KEY,
          language: 'en-us',
          q: debouncedSearch,
        },
      })
        .then((res: AxiosResponse) => {
          if (!res.data.length)
            addToast(`No such city found`, {
              appearance: 'warning',
              autoDismiss: true,
            });
          setSuggestions(res.data as Suggestion[]);
        })
        .catch((error) => {
          addToast(`Error while fetching suggestions: ${error.message}`, {
            appearance: 'warning',
            autoDismiss: true,
          });
        });
    } else {
      setSuggestions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const filteredValue = event.target.value.replace(/[^A-Za-z\s]/gi, '');

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
    <div className="search-container" ref={input}>
      <SearchIcon />
      <input
        type="text"
        value={search}
        placeholder="Enter city"
        onChange={handleInput}
        onFocus={showSuggestion}
        pattern="[A-Za-z]"
      />
      <div className="suggestions">
        {showSuggest &&
          suggestions.map((suggestion) => renderSuggestion(suggestion))}
      </div>
    </div>
  );
}
