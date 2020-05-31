import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fiveDaysRsp } from '../utils/responses';
import { Favorite } from '../models/favorite';
import { State, AppState } from '../models/rootsState';

const INITIAL_STATE: AppState = {
  fahrenheit: false,
  isLoading: false,
  favorites: [],
  currentShow: 'home',
  forecast: fiveDaysRsp,
  city: 'Tel',
  cityId: 666,
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
    setShow: (state, action: PayloadAction<'home' | 'favorites'>) => {
      state.currentShow = action.payload;
    },
    addToFavorite: (state) => {
      const newFavorite: Favorite = {
        city: state.city,
        id: state.cityId as number,
      };

      state.favorites = [...state.favorites, newFavorite];
    },
    removeFavorite: (state) => {
      state.favorites = [
        ...state.favorites.filter((fav) => fav.id !== state.cityId),
      ];
    },
  },
});

export const getShowInFahrenheit = (state: State): boolean =>
  state.app.fahrenheit;

export const getCurrentShow = (state: State): string => state.app.currentShow;

export const getFavorites = (state: State): Favorite[] => state.app.favorites;

export const getForecast = (state: State) => state.app.forecast;

export const getCityId = (state: State) => state.app.cityId;

export const {
  setAppIsLoading,
  setFahrenheit,
  setShow,
  addToFavorite,
  removeFavorite,
} = slice.actions;

export default slice.reducer;
