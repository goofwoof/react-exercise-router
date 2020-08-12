import React, {Component} from 'react';
import './Products.css';
import jsondata from '../../mockups/data.json';
import Detail from '../Detail/Detail';
import { BrowserRouter, Switch, Link, Route} from 'react-router-dom';
class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: jsondata, 
      to:[
        {
          pathname : `/Products/${jsondata.bicycle.id}`,
          state: jsondata.bicycle
        },
        {
          pathname : `/Products/${jsondata.TV.id}`,
          state: jsondata.TV
        },
        {
          pathname : `/Products/${jsondata.pencil.id}`,
          state: jsondata.pencil
        }
      ]
    }
  }
  render() {
    return <div>
      <BrowserRouter>
      <p>All Products:</p>
      <div>
        <Link id={this.state.data.bicycle.id} to={this.state.to[0]} >bicycle</Link>
        <Link id={this.state.data.TV.id} to={this.state.to[1]}>TV</Link>
        <Link id={this.state.data.pencil.id} to={this.state.to[2]}>pencil</Link>
      </div>
      <Switch>
        <Route  path="/Products/:id" component={Detail}/>
      </Switch>
      </BrowserRouter>
    </div>
  }

  componentDidMount(){
    document.getElementById("Home").setAttribute("class", "headerLink");
    document.getElementById("My Profile").setAttribute("class", "headerLink");
    document.getElementById("About Us").setAttribute("class", "headerLink");
    document.getElementById("Products").setAttribute("class", "headerShow");
  }
}

export default Products;