import React, { Component } from 'react';
import '../styles/app.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import About from './About';
import Baselayout from './Baselayout';
import Canes from './Canes';
import Cigars from './Cigars';
import Contact from './Contact';
import Hats from './Hats';
import Home from './Home';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Baselayout>
            <Switch>
              <Route path='/Products/Canes' component={Canes} />
              <Route path='/Products/Cigars' component={Cigars} />
              <Route path='/Products/Hats' component={Hats} />
              <Route path='/Products' component={Products} />
              <Route path='/About' component={About} />
              <Route path='/Contact' component={Contact} />
              <Route exact path='/' component={Home} />
            </Switch>
          </Baselayout>                                
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
