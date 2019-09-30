import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MyApp from './components/app/app.component'

import './App.css';

function App() {
  console.log(process.env.REACT_APP_MOVIEDB_API_KEY);
  return (
    <BrowserRouter>
      <MyApp/>
    </BrowserRouter>
  );
}

export default App;
