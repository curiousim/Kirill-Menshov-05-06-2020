import React from 'react';
import './App.scss';
import { HeadBar } from './components/HeadBar';
import { useSelector } from 'react-redux';
import { getCurrentShow } from './store/app.reducer';
import { FavoritesComponent } from './components/Favorites';
import { Home } from './components/Home';

function App() {
  const showComponent = useSelector(getCurrentShow);

  return (
    <div className="App">
      <HeadBar />
      {showComponent === 'favorites' ? <FavoritesComponent /> : <Home />}
    </div>
  );
}

export default App;
