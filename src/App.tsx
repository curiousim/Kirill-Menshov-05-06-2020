import React from 'react';
import './App.scss';
import { HeadBar } from './components/HeadBar';
import { useSelector } from 'react-redux';
import { getCurrentShow } from './store/app.reducer';
import { FavoritesComponent } from './components/Favorites';
import { Home } from './components/Home';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  const showComponent = useSelector(getCurrentShow);

  return (
    <ToastProvider>
      <div className="App">
        <HeadBar />
        {showComponent === 'favorites' ? <FavoritesComponent /> : <Home />}
      </div>
    </ToastProvider>
  );
}

export default App;
