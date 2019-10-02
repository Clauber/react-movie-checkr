import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import MyApp from './components/app/app.component'
import {Movie} from './components/movie-page/movie-page.component'

import './App.css';

function App() {
  // console.log(process.env.REACT_APP_MOVIEDB_API_KEY);
  return (
    <BrowserRouter>
      <Route exact path="/" component={MyApp}/>
      <Route exact path="/movie/:movieId" component={Movie}/>
    </BrowserRouter>
  );
}

export default App;
