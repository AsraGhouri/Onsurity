import React from 'react';
import './ComingSoon.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,

} from 'reactstrap';
class ComingSoon extends React.Component {
    render() {
        return (
            <div className="ComingSoon">
                <Navbar expand="md" id="top-nav">
                    <NavbarBrand href="/" id="navbar-brand"><img src={require('../../assets/69186AA9-06A4-47CA-B7A0-472124D02D62.png')}
                        className="onsurity-logo-blac" alt="logo" /></NavbarBrand>
                    {/* <Collapse navbar> */}
                    <Nav className="ml-auto col-sm-none" navbar id="navbar-links">
                        <NavItem>
                            <NavLink href="/components/" className="Blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <img src={require('../../assets/facebookIcon.svg')} alt="logo" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <img src={require('../../assets/instagramIcon.svg')} alt="logo" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <img src={require('../../assets/twitterIcon.svg')} alt="logo" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <img src={require('../../assets/linkedinIcon.svg')} alt="logo" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {/* </Collapse> */}
                </Navbar>
                <div className="container">
                    <h3 className="Were-Almost-Here ">We’re Almost Here!</h3>
                    <h6 className="And-We-Have-A-Gift-F">And We Have A Gift For You</h6>
                </div>
                <div className="coming-soon">
                    <img src={require('../../assets/Coming-soon/gift image desktop.svg')} alt="gift" />
                </div>
                <h6 className="Sign-up-for-early-ac">Sign up for early access and get 15% off on screen protection plan for your phone. </h6>
                <div className="container" id="signup">
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-4">
                        <InputGroup>
                            <Input placeholder="Email address" />
                            <InputGroupAddon addonType="append">
                                <Button id="Get-the-Discount">Get the Discount</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>
                <div id="bottom-navbar" >
                    <NavItem>
                        <NavLink href="/components/" className="Blog">Blog</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            <img src={require('../../assets/facebookIcon.svg')} alt="logo" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            <img src={require('../../assets/instagramIcon.svg')} alt="logo" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            <img src={require('../../assets/twitterIcon.svg')} alt="logo" />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            <img src={require('../../assets/linkedinIcon.svg')} alt="logo" />
                        </NavLink>
                    </NavItem>
                </div>
            </div>
        )
    };
}

export default ComingSoon;
