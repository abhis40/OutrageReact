// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Page1 from './webpages/Page1';
import Page2 from './webpages/Page2';
import Page3 from './webpages/Page3';
import Page4 from './webpages/Page4';
import Page5 from './webpages/Page5';
import MiddleComponent from './components/MiddleComponent';
import TilesComponent from './components/TilesComponent';


const App = () => {
  return (
    <>
    <Router>
      <Header />
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/page5" component={Page5} />
        </Switch>
    </Router>
    <MiddleComponent />
    <TilesComponent />
    </>



  
  );
};

export default App;
