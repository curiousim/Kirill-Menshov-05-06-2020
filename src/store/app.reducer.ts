import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    fahrenheit: false,
    isLoading: false,
    favorites: [],
    currentShow: 'home',
    forecast: [],
    city: '',
    cityCode: '',
  },
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
  },
});

export const getShowInFahrenheit = (state: RootState) => state.app.fahrenheit;

export const getCurrentShow = (state: RootState) => state.app.currentShow;

export const getFavorites = (state: RootState) => state.app.favorites;

export const getForecast = (state: RootState) => state.app.forecast;

export const { setAppIsLoading, setFahrenheit, setShow } = slice.actions;

export default slice.reducer;
