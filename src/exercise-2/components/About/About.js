import React, {Component} from 'react';
import './About.css';

class About extends Component {
  render() {
    return <div>
        <p>Company: ThoughtWorks Local</p>
        <p>Location: Xi'an</p>
        <p>For more information, please</p>
        <p>view our <a href='/'>website</a></p>
    </div>
  }

  componentDidMount(){
    document.getElementById("Home").setAttribute("class", "headerLink");
    document.getElementById("My Profile").setAttribute("class", "headerLink");
    document.getElementById("About Us").setAttribute("class", "headerShow");
    document.getElementById("Products").setAttribute("class", "headerLink");
  }
}

export default About;
