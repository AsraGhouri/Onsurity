import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,

} from 'reactstrap';
import './css/Header.css';
import { Link } from 'react-router-dom';
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            splitButtonOpen: false,
        };
    }
    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="Header">
                <Navbar light expand="md" id="blog-nav">
                        <NavbarBrand href="/">
                            <img src={require('../../assets/69186AA9-06A4-47CA-B7A0-472124D02D62.png')}
                                className="onsurity-logo-blac" alt="logo" />
                        </NavbarBrand>
                        <NavbarBrand href="/" id="login">
                            Log In
                        </NavbarBrand>
                        <NavbarToggler id="menuToggle" onClick={this.toggle} className="order-first" >
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu">
                            </ul>
                        </NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} id="toggle-bar" navbar >
                            <Nav className="order-first" id="navbar" navbar >
                                <NavItem>
                                    <NavLink>
                                        <Link to="/claims-filed">Claims</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">FAQ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to='/contact-us'>Contact</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink >
                                        <Link to="/add-plan">Add Plan</Link></NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" id="menu-buttons" navbar>
                                <NavItem id="download-btn">
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        <div className="dropdown">
                                            <Button outline id="download-app">Download App</Button>
                                            <div class="dropdown-content">
                                                <div className=" tip tip-up"></div>
                                                <a href="#" id="input-addon">
                                                    <InputGroup id="download-addon-btn">
                                                        <Input placeholder="Mobile number" />
                                                        <InputGroupAddon addonType="append"><Button>Send App Link</Button></InputGroupAddon>
                                                    </InputGroup>
                                                </a>
                                                <div className="container div">
                                                    <div className="left-div left-text">
                                                        Google Play
                                                <img src={require("../../assets/11.4.svg")} alt="social-icons" />
                                                    </div>
                                                    <div className="right-div right-text">
                                                        App Store
                                                <img src={require("../../assets/11.5.svg")} alt="social-icons" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem id="my-account-nav">
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        <div className="dropdown">
                                            <Button id="my-account">My Account</Button>
                                            <div class="dropdown-content">
                                                <div className=" tip tip-up"></div>
                                                <a href="#">My Plans</a>
                                                <a href="#">Edit Profile</a>
                                                <a href="#">Log Out</a>
                                            </div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
