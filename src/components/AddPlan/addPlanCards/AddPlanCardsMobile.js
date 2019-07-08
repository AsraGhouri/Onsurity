import React from 'react';
import {
    Col, Button, Form, FormGroup, Card, CardText, CardBody,
} from 'reactstrap';
import Dropdown from './../Dropdown.js/Dropdown'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
class AddPlancardsMobile extends React.Component {
    constructor(props) {
        super(props);
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
    responsive = {
        0: { items: 1 },
        1024: { items: 3 },
    }
    stagePadding = {
        paddingLeft: 50,
        paddingRight: 50,
    }
    render() {
        const handleOnDragStart = e => e.preventDefault()
        return (
            <div className="container addplan-cards">
                <div id="select-tenure">
                    <Form>
                        <FormGroup row>
                            <Col sm={12} >
                                <Dropdown
                                    title="Select Tenure"
                                    list={this.state.fruit}
                                    resetThenSet={this.resetThenSet}
                                />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <AliceCarousel mouseDragEnabled responsive={this.responsive}
                    stagePadding={this.stagePadding}
                    dotsDisabled={true} buttonsDisabled={true}>
                    <div>
                        <Card id="mobile-checkout-card-one">
                            {/* <img width="100%" src={require('../../../assets/mybox-selected (2)/6.3 (1).svg')} alt="Card image cap" /> */}
                            <CardBody style={{ padding: '0px' }}>
                                <CardText id="Mid">Basic</CardText>
                                <div style={{ padding: '1rem 1.25rem'}}>
                                    <CardText id="mid-price">₹500</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <Button id="mid-button">Select</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card id="mobile-checkout-card-two">
                            {/* <h3 id="Mid">Mid</h3> */}
                            {/* <img width="100%" src={require('../../../assets/mybox-selected (2)/1.png')} alt="Card image cap" /> */}
                            <CardBody style={{ padding: '0px' }}>
                                <CardText id="Mid">Mid</CardText>
                                <div style={{ padding:'1rem 1.25rem' }}>
                                    <CardText id="mid-price">₹900</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <Button id="mid-button">Select</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card id="mobile-checkout-card-three">
                            {/* <img width="100%" src={require('../../../assets/mybox-selected (2)/6.3 (1).svg')} alt="Card image cap" /> */}
                            <CardBody style={{ padding: '0px' }}>
                                <CardText id="Mid">Complete</CardText>
                                <div style={{ padding: '1rem  1.25rem' }}>
                                    <CardText id="mid-price">₹1200</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <CardText id="mid-lorem">Quiere la boca.</CardText>
                                    <Button id="mid-button">Select</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </AliceCarousel>
            </div >
        );
    }
}
export default AddPlancardsMobile;