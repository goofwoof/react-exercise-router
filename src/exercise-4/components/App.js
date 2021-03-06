import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from "react-router";
import Home from "./Home";
import About from "./About";
import User from "./User";
import NotMatch from "./NotMatch";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            
            <Route path='/:user(\d+)' component={User} />
            <Route path='/about' component={About} />
            <Route path='//\s*\S+?/' component={NotMatch} />
            <Route path='/' component={Home} />            
            <Route path='*' component={NotMatch} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
