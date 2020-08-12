import React, {Component} from 'react';
import './Self.css';

class Self extends Component {
  render() {
    return <div>
        <p>Username: XXX</p>
        <p>Gender: Female</p>
        <p>Work: IT Industry</p>
        <p>Website: '/my-profile'</p>
    </div>
  }

  componentDidMount(){
    document.getElementById("Home").setAttribute("class", "headerLink");
    document.getElementById("My Profile").setAttribute("class", "headerShow");
    document.getElementById("About Us").setAttribute("class", "headerLink");
  }
}

export default Self;
