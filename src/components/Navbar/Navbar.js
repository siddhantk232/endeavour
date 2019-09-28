import React, { Component } from 'react'

import './Navbar.css'
import Logo from './e_logo_final_txt.png'

import { SideNav, SideNavItem } from 'react-materialize'

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
            <SideNav className="s-nav-bg" trigger={<a href="#"><i className="fa fa-cog fa-2x gcolor-nav"></i></a>} options={{ closeOnClick: true, edge: 'right' }}>

              <SideNavItem subheader className="white-text">
                Menu
              </SideNavItem>

              <SideNavItem waves href="#about" className="f-size-nav">
                About
              </SideNavItem>
              <SideNavItem waves href="#mission" className="f-size-nav">
                Mission & Vision
              </SideNavItem>
              <SideNavItem waves href="#projects" className="f-size-nav">
                Projects
              </SideNavItem>
              <SideNavItem waves href="#achievements" className="f-size-nav">
                Achievements
              </SideNavItem>
              <SideNavItem waves href="#founders" className="f-size-nav">
                Founders
              </SideNavItem>
              <SideNavItem waves href="#testimonials" className="f-size-nav">
                Testimonials
              </SideNavItem>
              <SideNavItem waves href="#contact-us" className="f-size-nav">
                Contact Us!
              </SideNavItem>
            </SideNav>
          </div>
        </nav>
      </div >
    )
  }
}
