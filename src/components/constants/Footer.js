import React from 'react';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    Input,


} from 'reactstrap';
import { Link } from 'react-router-dom'
import './css/Footer.css'
function Footer() {
    return (
        <div className="Footer">
            <section className="footer">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 mx-auto" id="first">
                            <p className="get-app-title mt-4">Get The App</p>
                            <div className="get-the-app mt-4">
                                <InputGroup>
                                    <Input placeholder="Mobile number" />
                                    <InputGroupAddon addonType="append"><Button color="secondary">Send App Link</Button></InputGroupAddon>
                                </InputGroup>

                            </div>
                            <img src={require('../../assets/69186AA9-06A4-47CA-B7A0-472124D02D62.png')}
                                className="onsurity-logo-blac" id="onsurity-logo" alt="logo" />
                            <div className="container div">
                                <div className="left-div left-text">
                                    <img src={require("../../assets/playstore-link.svg")} alt="social-icons" />
                                </div>
                                <div className="right-div right-text">
                                    <img src={require("../../assets/appstore link.svg")} alt="social-icons" />
                                </div>
                            </div>
                            <div className="container social-icons" id="social-icons">
                                {/* <hr /> */}
                                <div className="text-center center-block">
                                    <Link to="/tps://www.facebook.com/bootsnipp">
                                        <img src={require('../../assets/Facebook-footer.svg')} alt="social-icons" />
                                    </Link>
                                    <Link to="/tps://twitter.com/bootsnipp">
                                        <img src={require('../../assets/twitter-icon.svg')} alt="social-icons" />
                                    </Link>
                                    <Link to="/tps://plus.google.com/+Bootsnipp-page">
                                        <img src={require('../../assets/instagram-icon.svg')} alt="social-icons" />
                                    </Link>
                                    <Link to="/ilto:bootsnipp@gmail.com">
                                        <img src={require('../../assets/Linkedin-footer.svg')} alt="social-icons" />
                                    </Link>
                                </div>
                                {/* <hr /> */}
                            </div>
                            <p className="right-reserved mt-4">© Onsurity All Rights Reserved 2019</p>
                        </div>
                        {/* social icons */}
                        {/* <hr className="clearfix w-100 d-md-none"> */}
                        <div className="col-md-2 mx-auto" id="second">
                            <h6 className="mt-3 mb-4">Navigation</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Claims</Link>
                                </li>
                                <li>
                                    <Link to="/">Terms of Use</Link>
                                </li>
                                <li>
                                    <Link to="/">Cookie</Link>
                                </li>
                                <li>
                                    <Link to="/">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <hr className="clearfix w-100 d-md-none"> */}
                        <div className="col-md-2 mx-auto" id="third">
                            <h6 className="mt-3 mb-4">Account</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">Log Out</Link>
                                </li>
                                <li>
                                    <Link to="/">My Plans</Link>
                                </li>
                                <li>
                                    <Link to="/">Edit Profile</Link>
                                </li>
                                <li>
                                    <Link to="/">Add Plan</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <hr className="clearfix w-100 d-md-none"> */}
                        <div className="col-md-2 mx-auto" id="fourth">
                            <h6 className="mt-3 mb-4">Contact</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/">info@onsurity.com</Link>
                                </li>
                                <li>
                                    <Link to="/">+1 234 234 2346</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
