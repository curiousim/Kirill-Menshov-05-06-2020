import { Favorite } from './favorite';
import { ForecastModel } from './forecast';

export interface State {
  app: AppState;
}

export interface AppState {
  fahrenheit: boolean;
  isLoading: boolean;
  favorites: Favorite[];
  currentShow: 'home' | 'favorites';
  forecast: ForecastModel[];
  city: string;
  cityId: string;
}
