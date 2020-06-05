import React from 'react';
import './App.scss';
import { HeadBar } from './components/HeadBar';
import { Main } from './components/Main';
import { useSelector } from 'react-redux';
import { getCurrentShow } from './store/app.reducer';
import { FavoritesComponent } from './components/Favorites';

function App() {
  const showComponent = useSelector(getCurrentShow);

  return (
    <div className="App">
      <HeadBar />
      {showComponent === 'favorites' ? <FavoritesComponent /> : <Main />}
    </div>
  );
}

export default App;
