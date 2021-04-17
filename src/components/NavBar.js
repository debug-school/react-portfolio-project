import React from 'react';
import logo from "../img/logo1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">
  	Debug School
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mb-2 ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
		<a className="nav-link" href="#">about me</a>
	  </li>
	  <li className="nav-item">
		  <a className="nav-link" href="#">services</a>
	   </li>
		<li className="nav-item">
		  <a className="nav-link" href="#">how work</a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">portfolio</a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">contact</a>
		</li>
    </ul>
   
  </div>
</nav>			
	)
}

export default NavBar;	
