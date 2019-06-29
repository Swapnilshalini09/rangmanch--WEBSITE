import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
class Navbar extends Component {
render(){
  return(
    <nav class="navbar  navbar-custom">
  <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">RANGMANCH</a>
    </div>
    <ul class="nav navbar-nav ">
      <li class="active"><Link to="/">HOME</Link></li>
      <li><Link to="About/">ABOUT US</Link></li>
      <li><a href="#">ART FORMS </a></li>
      <li><a href="#">GALLERY</a></li>
        <li><Link to="/Contact">CONTACT US</Link></li>
     </ul>
    <button class="btn btn-info navbar-btn">SIGN IN</button>
  </div>
</nav>



  );
}
}

export default Navbar;
