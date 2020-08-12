import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return <div>
        <p>This is a beautiful Home Page.</p>
        <p>And the url is '/'</p>
    </div>

  }

  componentDidMount(){
    document.getElementById("Home").setAttribute("class", "headerShow");
    document.getElementById("My Profile").setAttribute("class", "headerLink");
    document.getElementById("About Us").setAttribute("class", "headerLink");
    document.getElementById("Products").setAttribute("class", "headerLink");
  }
}

export default Home;
