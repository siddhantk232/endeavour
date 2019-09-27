import React, { Component } from 'react'

import './Navbar.css'
import Logo from './e_logo_final_txt.png'

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center"><img src={Logo} alt="Endeavour" /></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down m-menu">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav m-menu" id="mobile-demo" ref={this.myRef}>
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div >
    )
  }
}
