import React, {Component} from 'react';
import '../styles/App.css';
import {Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import Self from './Self/Self';
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products'

class App extends Component {
  constructor(props){
    super(props);
    this.Routers=[{
      id:1,
      name: "Home",
      url: "/",
    },{
      id:2,
      name: "Products",
      url: "/Products",
      
    },{
      id:3,
      name: "My Profile",
      url: "/my-profile",
    },{
      id:4,
      name: "About Us",
      url: "/about-us",
    }];
  }

  render() {
    return <div>
      <BrowserRouter>
        <div className="header">
        {
          this.Routers.map(router=>
            <Link id={router.name} to={router.url} key={router.id} >{router.name}</Link>
          )
        }
        </div>
        <Switch>
          <Route exact path={this.Routers[0].url} component={Home}/>
          <Route path={this.Routers[1].url} component={Products}/>
          <Route path={this.Routers[2].url}  component={Self}/> 
          <Route path={this.Routers[3].url}  component={About}/> 
          <Route path='/goods'  component={Products}/> 
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  }
}

export default App;