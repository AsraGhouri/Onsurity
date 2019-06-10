import React from 'react';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    Input,


} from 'reactstrap';
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
                                    <a href="https://www.facebook.com/bootsnipp">
                                        <img src={require('../../assets/Facebook-footer.svg')} alt="social-icons" />
                                    </a>
                                    <a href="https://twitter.com/bootsnipp">
                                        <img src={require('../../assets/twitter-icon.svg')} alt="social-icons" />
                                    </a>
                                    <a href="https://plus.google.com/+Bootsnipp-page">
                                        <img src={require('../../assets/instagram-icon.svg')} alt="social-icons" />
                                    </a>
                                    <a href="mailto:bootsnipp@gmail.com">
                                        <img src={require('../../assets/Linkedin-footer.svg')} alt="social-icons" />
                                    </a>
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
                                    <a href="#!">About</a>
                                </li>
                                <li>
                                    <a href="#!">Claims</a>
                                </li>
                                <li>
                                    <a href="#!">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="#!">Cookie</a>
                                </li>
                                <li>
                                    <a href="#!">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#!">Contact</a>
                                </li>
                                <li>
                                    <a href="#!">FAQ</a>
                                </li>
                                <li>
                                    <a href="#!">Blog</a>
                                </li>
                            </ul>
                        </div>
                        {/* <hr className="clearfix w-100 d-md-none"> */}
                        <div className="col-md-2 mx-auto" id="third">
                            <h6 className="mt-3 mb-4">Account</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Log Out</a>
                                </li>
                                <li>
                                    <a href="#!">My Plans</a>
                                </li>
                                <li>
                                    <a href="#!">Edit Profile</a>
                                </li>
                                <li>
                                    <a href="#!">Add Plan</a>
                                </li>
                            </ul>

                        </div>
                        {/* <hr className="clearfix w-100 d-md-none"> */}
                        <div className="col-md-2 mx-auto" id="fourth">
                            <h6 className="mt-3 mb-4">Contact</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">info@onsurity.com</a>
                                </li>
                                <li>
                                    <a href="#!">+1 234 234 2346</a>
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
