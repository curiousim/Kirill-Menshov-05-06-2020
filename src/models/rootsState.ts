import { Favorite } from './favorite';
import { Forecast } from './forecast';

export interface State {
  app: AppState;
}

export interface AppState {
  fahrenheit: boolean;
  isLoading: boolean;
  favorites: Favorite[];
  currentShow: 'home' | 'favorites';
  forecast: Forecast[];
  city: string;
  cityId: number | null;
}
