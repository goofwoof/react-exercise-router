import React, {Component} from 'react';
import '../styles/App.css';
import {Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import acyncComponent from './acyncComponent'
import Self from './Self/Self';
import Home from './Home/Home';
import About from './About/About';

class App extends Component {
  constructor(props){
    super(props);
    this.Routers=[{
      id:1,
      name: "Home",
      url: "/",
      component: acyncComponent(()=>{import('./Home/Home')})
    },{
      id:2,
      name: "My Profile",
      url: "/my-profile",
      component: acyncComponent(()=>{import('./Self/Self')})
    },{
      id:3,
      name: "About Us",
      url: "/about-us",
      component: acyncComponent(()=>{import('./About/About')})
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
          <Route path={this.Routers[1].url} component={Self}/>
          <Route path={this.Routers[2].url}  component={About}/>  
        </Switch>
      </BrowserRouter>
    </div>
  }
}

export default App;
/*{
          this.Routers.map(router=>{
            if(router.name === "Home"){
              return <Route exact path={router.url} key={router.id} component={router.component}/>
            }
            else{
              return <Route path={router.url} key={router.id} component={router.component}/>
            }
          })
        }*/