import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Favorite } from '../models/favorite';
import { State, AppState } from '../models/rootsState';
import { ForecastModel } from '../models/forecast';

const INITIAL_STATE: AppState = {
  fahrenheit: false,
  isLoading: false,
  currentShow: 'home',
  city: 'Tel Aviv',
  cityId: '215854',
  favorites: [],
  forecast: [],
};

export const slice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setAppIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setFahrenheit: (state, action: PayloadAction<boolean>) => {
      state.fahrenheit = action.payload;
    },
    setForecast: (state, action: PayloadAction<ForecastModel[]>) => {
      state.forecast = action.payload;
    },
    setShow: (state, action: PayloadAction<'home' | 'favorites'>) => {
      state.currentShow = action.payload;
    },
    addToFavorite: (state) => {
      const newFavorite: Favorite = {
        city: state.city,
        id: state.cityId as string,
      };

      state.favorites = [...state.favorites, newFavorite];
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = [
        ...state.favorites.filter((fav) => fav.id !== action.payload),
      ];
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setCityId: (state, action: PayloadAction<string>) => {
      state.cityId = action.payload;
    },
  },
});

export const getShowInFahrenheit = (state: State): boolean =>
  state.app.fahrenheit;

export const getCurrentShow = (state: State): string => state.app.currentShow;

export const getFavorites = (state: State): Favorite[] => state.app.favorites;

export const getForecast = (state: State) => state.app.forecast;

export const getCityId = (state: State) => state.app.cityId;

export const getCityName = (state: State) => state.app.city;

export const getIsLoading = (state: State) => state.app.isLoading;

export const {
  setAppIsLoading,
  setFahrenheit,
  setShow,
  addToFavorite,
  removeFavorite,
  setCity,
  setCityId,
  setForecast,
} = slice.actions;

export default slice.reducer;
