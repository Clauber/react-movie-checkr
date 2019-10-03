import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import MyApp from './components/app/app.component'
import {Movie} from './components/movie-page/movie-page.component'

import './App.css';

function App() {
  // console.log(process.env.REACT_APP_MOVIEDB_API_KEY);
  console.log("here");
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={MyApp}/>
      <Route path="/movie/:movieId" component={Movie}/>
    </HashRouter>
    // <HashRouter>
    // {/* <BrowserRouter> */}
    //   <Route exact path="/" component={MyApp}/>
    //   {/* <MyApp/> */}
    //   {/* <Route path="/movie/:movieId" component={Movie}/> */}
    // {/* </BrowserRouter> */}
    // </HashRouter>
  );
}

export default App;
