import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    fahrenheit: false,
    isLoading: false,
    favorites: [],
    currentShow: 'main',
    forecast: [],
  },
  reducers: {
    setAppIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const getShowInFahrenheit = (state: RootState) => state.app.fahrenheit;

export const {} = slice.actions;

export default slice.reducer;
