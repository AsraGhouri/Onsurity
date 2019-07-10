import React from 'react';
import './Blogs.css';

import {
    Button,
    Card,
    CardText,
    CardBody,
    CardLink,

} from 'reactstrap';
import { Link } from 'react-router-dom'
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import Gallery from './AliceCaraousal/Gallery';
class Blogs extends React.Component {
    render() {
        return (
            <div className="blog-page">
                <Header />
                <section className="blog-section">
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <p className="BLOG">
                                    <span className="text-style-1">Bl</span>
                                    <span className="text-style-2">og</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container Tech">
                        <div className="row">
                            <div className="col-8" id="tech-first-column">
                                <div className="how-tech-body">
                                    <p className="How-Tech-is-Changing">How Tech is Changing Insurance as We Know It</p>
                                    <p className="Insurance-is-a-very">Insurance is a very old indusrty, it’s been around longer than we actually know.
                                        And now, it’s changing faster than ever…</p>
                                    <p>
                                        <Link to='/' id="tech-read-more">Read more <i className="fas fa-angle-right"></i></Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-4" id="tech-image">
                                <img src={require('../../assets/1_WCxAynIBqN3rwe4a342gcA.jpeg')} className="tech-change-image" alt="cap" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="business" >
                                <div className="row mt-2">
                                    <Button id="business-btn">Business</Button>
                                    <Button id="business-btn">Business</Button>
                                </div>
                                <p className="Lorem-ipsum">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                            </div>
                        </div>
                        <div className="recent-post mt-4 mb-4">
                            <h5 className="Recent-Posts-heading">Recent Posts</h5>
                            <div className="row">
                                <div className="col-4">
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
                                            <CardLink href="#" id="Read-more">Read More <i className="fas fa-angle-right"></i> </CardLink>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-4">
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
                                            <CardLink href="#" id="Read-more">Read More <i className="fas fa-angle-right"></i> </CardLink>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-4">
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
                                            <CardLink href="#" id="Read-more">Read More <i className="fas fa-angle-right"></i> </CardLink>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                            <div className="row" id="second-row-cards">
                                <div className="col-4">
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
                                            <CardLink href="#" id="Read-more">Read More <i className="fas fa-angle-right"></i> </CardLink>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-4">
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
                                            <CardLink href="#" id="Read-more">Read More <i className="fas fa-angle-right"></i> </CardLink>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-4">
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
                                            <CardLink href="#" id="Read-more">Read More <i className="fas fa-angle-right"></i> </CardLink>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               <Gallery />
                <Footer />
            </div >
        );
    }
}
export default Blogs;