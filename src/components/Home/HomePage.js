import React from 'react';
import './HomePage.css';
import Header from '../constants/Header'
import Footer from '../constants/Footer';
import Dropdown from './Dropdown.js/Dropdown'
import { Link, animateScroll as scroll } from "react-scroll";
import '../Blogs/Blogs.css';
import {
    Col, Button, Form, FormGroup, Card,
    CardText,
    CardBody,
    CardLink,
} from 'reactstrap';
import Gallery from './AliceCaraousal/Gallery';
import BlogCaraousal from './AliceCaraousal/BlogCarousal';
class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            fruit: [
                {
                    id: 0,
                    title: 'samsung',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 1,
                    title: 'Apple',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 2,
                    title: 'Google',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 3,
                    title: 'Apple',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 4,
                    title: 'Google',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 5,
                    title: 'Google',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 6,
                    title: 'Google',
                    selected: false,
                    key: 'fruit'
                },
                {
                    id: 7,
                    title: 'Google',
                    selected: false,
                    key: 'fruit'
                },
            ]
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    toggleSelected = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp[id].selected = !temp[id].selected
        this.setState({
            [key]: temp
        })
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        })
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className="HomePage">
                <div>
                    <Header />
                </div>
                <div className="mobile-view-form">
                    <div className="container">
                        {/* <section className="one"> */}
                        <div className="row mt-4" id="first-section">
                            <div className="col-sm-12 col-lg-7">
                                <div className="insurance-section-heading">
                                    <h1 className="Insurance-that-Works">Insurance that Works for You</h1>
                                    <h1 className="Mobile-Protection-that-Works-for-You">Mobile Protection that Works for You</h1>
                                    <h6 className="Simple-Smart-Affor">
                                        Simple. Smart. Affordable.
                                    </h6>
                                </div>
                                <div id="insurance-form">
                                    <Form>
                                        <FormGroup row>
                                            <Col sm={12}>
                                                <Dropdown
                                                    title="Select your brand"
                                                    list={this.state.fruit}
                                                    resetThenSet={this.resetThenSet}
                                                />
                                            </Col>
                                            <Col sm={12}>
                                                <Dropdown
                                                    title="Select your model"
                                                    list={this.state.fruit}
                                                    resetThenSet={this.resetThenSet}
                                                />
                                            </Col>
                                            <Col lg={12}>
                                                <Dropdown
                                                    title="When do you buy it?"
                                                    list={this.state.fruit}
                                                    resetThenSet={this.resetThenSet}
                                                />
                                            </Col>
                                            <Col sm={12}>
                                                <Button id="protect-my-phone">
                                                    Protect My Phone
                                                    </Button>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </div>

                            </div>
                            <div className="col-lg-4 offset-lg-1" id="Iphone-x-gif">
                                <img src={require('../../assets/landing page phone image.svg')} alt="gif" className="iPhone-X" />
                            </div>
                            <div className="row">
                            <div className="col-sm-12" id="arrow-down">
                                <Link
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={90}
                                    duration={500}
                                >
                                    <img src={require('../../assets/1- down arrow.svg')} alt="arrow-down" />
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div >
                    <section className="Easire-section"
                        id="section1">
                        <div className="container">
                            <div className="row mt-4" style={{ paddingTop: '13%' }}>
                                <div className="col-sm-12">
                                    <h5 className="Its-Easier-Than-You">It’s Easier Than You Think</h5>
                                    <div className="row mt-4" id="easier-rows">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="mark1">01</span>
                                                    <div className="rectangle-box"></div>
                                                </div>
                                                <div className="col-sm-6" id="rectangle-box-col">
                                                    <h6 className="Select-your-device">
                                                        Select your device
                                        </h6>
                                                    <p className="Insurance-does-not-h">
                                                        Insurance does not have to be complicated. Just
                                                         tell us a little bit about what you would like to
                                                         protect and we'll make sure you get a plan you love.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4" id="easier-rows">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-sm-6" id="rectangle-box-col">
                                                    <h6 className="Select-your-device">
                                                        Select your device
                                        </h6>
                                                    <p className="Insurance-does-not-h">
                                                        Insurance does not have to be complicated. Just
                                                         tell us a little bit about what you would like to
                                                         protect and we'll make sure you get a plan you love.
                                        </p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <span className="mark1">02</span>
                                                    <div className="rectangle-box"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4" id="easier-rows">
                                        <div className="col-lg-12">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <span className="mark1">03</span>
                                                    <div className="rectangle-box"></div>
                                                </div>
                                                <div className="col-sm-6" id="rectangle-box-col">
                                                    <h6 className="Select-your-device">
                                                        Select your device
                                        </h6>
                                                    <p className="Insurance-does-not-h">
                                                        Insurance does not have to be complicated. Just
                                                         tell us a little bit about what you would like to
                                                         protect and we'll make sure you get a plan you love.
                                        </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="check-you-price">
                                        <div className="row mt-4">
                                            <Button>
                                                Check Our Prices
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="fourth-container">
                    <div className="container">
                        <section id="love-people">
                            <div>
                                <div className="row mt-4" style={{ marginTop: '20%' }}>
                                    <h3 className="Heres-Why-You-Will">Here’s Why You Will Love Us!</h3>
                                    <div className="col-6">
                                        <div className="row">
                                            <span className="col-lg-2 col-sm-6">
                                                <img src={require('../../assets/homepage icon 1.svg')} alt="icon1" className="blue-icon" /></span>
                                            <span className="col-lg-10 col-sm-6">
                                                <p className="Coverage-for-previou">Coverage for previously purchased devices</p>
                                                <p className="If-something-happens">If something happens to your device, we get to
                                            work. Just report a claim and we'll make sure it gets fixed in no time.</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <span className="col-lg-2">
                                                <img src={require('../../assets/homepage icon 2.svg')} alt="icon1" className="blue-icon" /></span>
                                            <span className="col-lg-10">
                                                <p className="Coverage-for-previou">Quick and hassle-free claims</p>
                                                <p className="If-something-happens">
                                                    If something happens to your device, we get to work.
                                                    Just report a claim and we'll make sure it gets fixed in no time.
                                        </p>
                                            </span>
                                        </div>
                                    </div>

                                    <br />
                                </div>
                                <div className="row mt-4" id="select-device-row">
                                    <div className="col-6">
                                        <div className="row">
                                            <span className="col-lg-2 col-sm-6">
                                                <img src={require('../../assets/homepage icon 3.svg')} alt="icon1" className="blue-icon" /></span>
                                            <span className="col-lg-10 col-sm-6">
                                                <p className="Coverage-for-previou">Save money if your device stays safe</p>
                                                <p className="If-something-happens">
                                                    When you're lucky and nothing happens to your device,
                                                    we reward you with a discount on the purchase of your next plan!
                                                    </p>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <span className="col-lg-2 col-sm-6">
                                                <img src={require('../../assets/homepage icon 4.svg')} alt="icon1" className="blue-icon" /></span>
                                            <span className="col-lg-10 col-sm-6">
                                                <p className="Coverage-for-previou">Transparent process</p>
                                                <p className="If-something-happens">
                                                    No hidden costs, no asterisks, no fine print, you’re always in the know..</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="blog-section">
                            <div className="gallery mt-4">
                                <div id="blog-Carousal">
                                    <h3 className="Heres-Why-You-Will-people">People <img src={require('../../assets/1.5.svg')} alt="heart" /> Onsurity</h3>
                                </div><Gallery />
                            </div>
                        </section>
                        <section className='our-blog-section'>
                            <div className="container">
                                <h6 className="Our-Blog">
                                    Our Blog
                           </h6>
                                <div className="row" id="cards-section" style={{ height: '600px' }}>
                                    <div className="col-lg-4 col-sm-12">
                                        <Card>
                                            <img width="100%" src={require('../../assets/apple_imac_21inch_201702_thumb800.jpg')} alt="cap" />
                                            <CardBody>
                                                <CardLink href="#">
                                                    <Button id="insurance">Insurance</Button>
                                                </CardLink>
                                                <CardLink href="#">
                                                    <Button id="insurance">Business</Button>
                                                </CardLink>
                                                <CardText id="Three-reasons-why-yo">Three reasons why you should get an insurance plan today</CardText>
                                                <CardText id="I-experienced-a-frau">I experienced a fraud on my credit card and immediately…</CardText>
                                                <CardLink href="#" id="Read-more">Read More <span>&#62;</span></CardLink>
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <Card>
                                            <img width="100%" src={require('../../assets/apple_imac_21inch_201702_thumb800.jpg')} alt="cap" />
                                            <CardBody>
                                                <CardLink href="#">
                                                    <Button id="insurance">Insurance</Button>
                                                </CardLink>
                                                <CardLink href="#">
                                                    <Button id="insurance">Business</Button>
                                                </CardLink>
                                                <CardText id="Three-reasons-why-yo">Three reasons why you should get an insurance plan today</CardText>
                                                <CardText id="I-experienced-a-frau">I experienced a fraud on my credit card and immediately…</CardText>
                                                <CardLink href="#" id="Read-more">Read More <span>&#62;</span> </CardLink>
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 col-sm-12">
                                        <Card>
                                            <img width="100%" src={require('../../assets/apple_imac_21inch_201702_thumb800.jpg')} alt="cap" />
                                            <CardBody>
                                                <CardLink href="#">
                                                    <Button id="insurance">Insurance</Button>
                                                </CardLink>
                                                <CardLink href="#">
                                                    <Button id="insurance">Business</Button>
                                                </CardLink>
                                                <CardText id="Three-reasons-why-yo">Three reasons why you should get an insurance plan today</CardText>
                                                <CardText id="I-experienced-a-frau">I experienced a fraud on my credit card and immediately…</CardText>
                                                <CardLink href="#" id="Read-more">Read More <span>&#62;</span></CardLink>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                                <BlogCaraousal />
                                <div className="protect-device">
                                    <h2 className="Ready-To-Protect-You">Ready To Protect Your Device?</h2>
                                    <div className="row mt-4">
                                        <Button id="Lets-get-started">Let’s get started</Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <br />
                <Footer />
            </div >
        );
    }
}
export default HomePage;