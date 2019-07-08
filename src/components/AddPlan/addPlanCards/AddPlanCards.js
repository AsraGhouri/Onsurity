import React from 'react';
import {
    Col, Button, Form, FormGroup, Card, CardText, CardBody,
} from 'reactstrap';
import Dropdown from './../Dropdown.js/Dropdown'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
class AddPlancards extends React.Component {
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
    //   stagePadding = {
    //     paddingLeft: 30,
    //     paddingRight: 30,
    // }
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
                {/* <AliceCarousel mouseDragEnabled responsive={this.responsive }  
                 dotsDisabled={true} buttonsDisabled={true}> */}
                <ul className="add-plan-card-ul">
                    <li className="add-plan-left-card">
                        <Card >
                            <img width="100%" src={require('../../../assets/mybox-selected (2)/6.3 (1).svg')} alt="Card image cap" />
                            <CardBody>
                                <CardText id="Mid">Basic</CardText>
                                <CardText id="mid-price">₹500</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <Button id="mid-button">Select</Button>
                            </CardBody>
                        </Card>
                    </li>
                    <li className="add-plan-middle-card">
                        <Card id="addplan-card-one">
                            <img width="100%" src={require('../../../assets/mybox-selected (2)/1.png')} alt="Card image cap" />
                            <CardBody>
                                <CardText id="Mid">Mid</CardText>
                                <CardText id="mid-price">₹900</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <Button id="mid-button">Select</Button>
                            </CardBody>
                        </Card>
                    </li>
                    <li className="add-plan-right-card">
                        <Card>
                            <img width="100%" src={require('../../../assets/mybox-selected (2)/6.3 (1).svg')} alt="Card image cap" />
                            <CardBody>
                                <CardText id="Mid">Complete</CardText>
                                <CardText id="mid-price">₹1200</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <CardText id="mid-lorem">Lorem ipsum dolor</CardText>
                                <Button id="mid-button">Select</Button>
                            </CardBody>
                        </Card>
                    </li>
                    {/* </AliceCarousel> */}
               </ul>
            </div >
        );
    }
}
export default AddPlancards