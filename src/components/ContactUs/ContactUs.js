import React from 'react';
import './ContactUs.css';
import Header from '../constants/Header';
import Footer from '../constants/Footer';
import {
  Button, Form, FormGroup, Input, Card, CardImg, CardText, CardBody,
} from 'reactstrap';
class ContactUs extends React.Component {

  render() {
    return (
      <div className="ContactUs">
        <Header />
        <section className="contact-us-body">
          <div className="container mt-4">
            <h1 className="contact-us-head">Contact Us</h1>
            <h6 className="Fill-the-fields-belo">Fill the fields below and we will get back to you.</h6>
            <div className="row mt-4">
              <div className="col-sm-6 order-sm-1" id="contact-first-column">
                <ul className="ul" id="contact-first-row">
                  <li>
                    <div className="row">
                      <div className="col-1">
                        <img src={require('../../assets/9.1.svg')} alt="contact-icon" className="contact-icon envelop" />
                      </div>
                      <div className="col-5">
                        <span className="contact-list">info@onsurity.com</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1">
                        <img src={require('../../assets/9.2.svg')} alt="contact-icon" className="contact-icon" />
                      </div>
                      <div className="col-5">
                        <span className="contact-list">Ele Vana, Kaikondarahalli, Bangalore, Karnataka</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1">
                        <img src={require('../../assets/9.3.svg')} alt="contact-icon" className="contact-icon" />
                      </div>
                      <div className="col-5">
                        <span className="contact-list">+1 234 234 2346</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <img src={require('../../assets/location-map3.jpg')} alt="map" className="map" />
                <div className="row" id="address-row">
                  <div className="col-2">
                  <img src={require('../../assets/contact-icons/address - m29.svg')} alt="map" className="adress" />
                  </div>
                  <div className="col-9" id="Address-Lorem-ipsum-dolor-sit-amet">
                  Address: Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
              <div className="col-sm-6 order-sm-2" id="contact-second-column">
                <Form id="form">
                  <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Name" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" name="email" id="email" placeholder="Email address" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" name="text" id="text-area" placeholder="Your message" />
                  </FormGroup>
                  <div className="send-btn-div">
                    <Button id="send">Send</Button>
                  </div>
                </Form>
                <div className="row call-mail-us">
                  <div className="col-6">
                    <Card id="contact-card">
                      <CardImg top width="100%" src={require('../../assets/contact-icons/mail us- m29.svg')} alt="Card image cap" id="contact-img"/>
                      <CardBody id="card-body">
                        <CardText>Mail Us</CardText>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-6">
                    <Card id="contact-card">
                      <CardImg top width="100%" src={require('../../assets/contact-icons/call us-m29.svg')} alt="Card image cap" id="contact-img"/>
                      <CardBody  id="card-body">
                        <CardText>Call Us</CardText>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div >
    );
  }
}

export default ContactUs;