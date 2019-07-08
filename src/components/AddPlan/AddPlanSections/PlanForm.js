import React from 'react';
import {
    Col, Button, Form, FormGroup
} from 'reactstrap';
import Dropdown from './../Dropdown.js/Dropdown'
class PlanForm extends React.Component {
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
    render() {
        return (
            <div id="addPlan-form">
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
        );
    }
}
export default PlanForm;