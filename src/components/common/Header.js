import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import '../../assets/style/custom.css';

import logo from '../../assets/images/logoSmall.png';

export default class Hearder extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.toggle1 = this.toggle1.bind(this);
    this.onMouseEnter1 = this.onMouseEnter1.bind(this);
    this.onMouseLeave1 = this.onMouseLeave1.bind(this);

    this.toggle2 = this.toggle2.bind(this);
    this.onMouseEnter2 = this.onMouseEnter2.bind(this);
    this.onMouseLeave2 = this.onMouseLeave2.bind(this);

    this.toggle3 = this.toggle3.bind(this);
    this.onMouseEnter3 = this.onMouseEnter3.bind(this);
    this.onMouseLeave3 = this.onMouseLeave3.bind(this); 

    this.state = {
      isOpen: false,
      dropdownOpen1: false,
      dropdownOpen2: false,
      dropdownOpen3: false,
    };
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  toggle1() {
    this.setState(prevState => ({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }

  toggle2() {
    this.setState(prevState => ({
      dropdownOpen2: !prevState.dropdownOpen2
    }));
  }

  toggle3() {
    this.setState(prevState => ({
      dropdownOpen3: !prevState.dropdownOpen3
    }));
  }

  onMouseEnter1() {
    this.setState({dropdownOpen1: true});
  }

  onMouseLeave1() {
    this.setState({dropdownOpen1: false});
  }

  onMouseEnter2() {
    this.setState({dropdownOpen2: true});
  }

  onMouseLeave2() {
    this.setState({dropdownOpen2: false});
  }

  onMouseEnter3() {
    this.setState({dropdownOpen3: true});
  }

  onMouseLeave3() {
    this.setState({dropdownOpen3: false});
  }

  render() {
    return (
      <div className="bg-black">
        <Navbar light expand="md" className="container" id="header">
          <NavbarBrand href="/"><img src={ logo } /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/test">Test</NavLink>
              </NavItem>

              <Dropdown nav inNavbar
                onMouseOver={this.onMouseEnter1} 
                onMouseLeave={this.onMouseLeave1} 
                isOpen={this.state.dropdownOpen1} 
                toggle={this.toggle1}>

                <a>
                  Building Supplies
                </a>
                <DropdownMenu>
                  <DropdownItem>
                    Tubing
                  </DropdownItem>
                  <DropdownItem>
                    Sheet Metal
                  </DropdownItem>
                  <DropdownItem>
                    Trusses
                  </DropdownItem>
                  <DropdownItem>
                    Base Rail
                  </DropdownItem>
                  <DropdownItem>
                    Hardware
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <Dropdown nav inNavbar
                onMouseOver={this.onMouseEnter2} 
                onMouseLeave={this.onMouseLeave2} 
                isOpen={this.state.dropdownOpen2} 
                toggle={this.toggle2} >

                <a>
                  Steel Buildings
                </a>
                <DropdownMenu>
                  <DropdownItem>
                    One Car Garage
                  </DropdownItem>
                  <DropdownItem>
                    Two Car Garage
                  </DropdownItem>
                  <DropdownItem>
                    Warehouse
                  </DropdownItem>
                  <DropdownItem>
                    Lean-To
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              
              <NavItem>
                <NavLink href="">Carports</NavLink>
              </NavItem>

              <Dropdown nav inNavbar
                onMouseOver={this.onMouseEnter3} 
                onMouseLeave={this.onMouseLeave3} 
                isOpen={this.state.dropdownOpen3} 
                toggle={this.toggle3} >

                <a>
                  Agricultural
                </a>
                <DropdownMenu>
                  <DropdownItem>
                    Barns
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <NavLink href="">Custom</NavLink>
              </NavItem>
              
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

