import React from 'react';
import './css/NotFiled.css';
import {
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import ClaimCarousal from './ClaimCaraousal/ClaimCarousal';
import MobileCarousal from './ClaimCaraousal/MobileCarousal'
class NotFiled extends React.Component {
    render() {
        return (
            <div className="not-filed">
                <Header />
                <div className="not-filed-body">
                    <div className="container">
                        <p className="You-have-not-reporte">You have not reported screen damage against
                                         any of your plans yet.If you would like to report damage and file a claim, please
                                  do so through the Onsurity app on your device. </p>
                        <div className="row" id="non-filed-first-row">
                            <div className="col-sm-12">
                                <div className="col-md-4 mx-auto" id="first">
                                    <p className="get-app-title mt-4">Get The App</p>
                                    <div className="get-the-app mt-4" id="get-the-app">
                                        <InputGroup>
                                            <Input placeholder="Mobile number" />
                                            <InputGroupAddon addonType="append"><Button color="secondary">Send App Link</Button></InputGroupAddon>
                                        </InputGroup>
                                    </div>
                                    <div className="container div" id="claims-social-icons">
                                        <div className="left-div left-text" id="left-div">
                                            <img src={require("../../assets/playstore-link.svg")} alt="social-icons" />
                                        </div>
                                        <div className="right-div right-text" id="right-div">
                                            <img src={require("../../assets/appstore link.svg")} alt="social-icons" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="non-filed-second-row">
                        <h4 className="How-to-Report-a-Clai">
                            How to Report a Claim?
                            </h4>
                        <div className="col-md-12" id="desktop-claim-carousel">
                            <ClaimCarousal />
                        </div>
                        {/* </div> */}
                    </div>
                    <div id="non-filed-mobile-second-row">
                        <h4 className="How-to-Report-a-Clai">
                            How to Report Damage?
                            </h4>
                        <MobileCarousal />
                    </div>
                    <div className="container">
                        <div id="non-filed-third-row">
                            <h4 className="How-to-Report-a-Clai">
                                Is Your Protected Device Not Switching On?
                            </h4>
                            <div className="report-claim-info">
                                <p className="Hey-sorry-about-tha">Hey, sorry about that, but don’t worry we’re here to help.</p>
                                <p className="You-can-submit-photo ">You can submit photos of the damaged device using another phone. Here’s how to do it</p>
                            </div>
                        </div>
                        <div id="non-filed-fourth-row">
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">01</p>
                                    <img src={require('../../assets/claims/19.3.svg')} alt="claims" className="damage-devices" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit" id="Download-the-Onsurit">Take a spare smartphone.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">02</p>
                                    <img src={require('../../assets/claims/19.4.svg')} alt="claims" className="image-center" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit">Download the Onsurity app on the spare phone and login to your account. </p>
                                        <p className="Add-the-number-of-th">Add the number of the spare phone here to get the app link through SMS. </p>
                                        <div className="get-the-app mt-4" id="get-the-app">
                                            <InputGroup>
                                                <Input placeholder="Mobile number" />
                                                <InputGroupAddon addonType="append"><Button color="secondary">Send App Link</Button></InputGroupAddon>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">03</p>
                                    <img src={require('../../assets/claims/19.5.svg')} alt="claims" className="image-center" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit">Go to the ‘My Plans’ tab, select your plan and click the ‘Report Damage’ button. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">04</p>
                                    <img src={require('../../assets/claims/19.6.svg')} alt="claims" className="image-center" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit">Remove the screen guard or tempered glass from the damaged phone </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">05</p>
                                    <img src={require('../../assets/claims/19.7.svg')} alt="claims" className="image-center" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit">Dial *#06# to display the IMEI code on the other phone</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">06</p>
                                    <img src={require('../../assets/claims/19.8.svg')} alt="claims" className="image-center" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit">Take pictures of the front of the damaged phone </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="fourth-row-mobile-columns">
                                <div className="col-sm-6 col-lg-5 offset-lg-1" id="claims-image">
                                    <p className="bg-number">07</p>
                                    <img src={require('../../assets/claims/19.9.svg')} alt="claims" className="image-center" />
                                </div>
                                <div className="col-sm-6 col-lg-5">
                                    <div className="login-to-your-account">
                                        <p className="Download-the-Onsurit">Take pictures of the back </p>
                                        <p className="Download-the-Onsurit">Click submit and you’re done! </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="non-filed-last-row">
                            <p className="If-you-have-any-more ">If you have any more questions about the process, or anything
                        else related to your plan, you can check out the <Link to='/' className="text-style-1">FAQs</Link> or reach
                        out to our team <Link to="/" className="text-style-1">here</Link>.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}



export default NotFiled;