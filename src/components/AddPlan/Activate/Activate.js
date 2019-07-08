import React from 'react';
import {
    Button,
   InputGroup, InputGroupAddon, Input
} from 'reactstrap';
class Activate extends React.Component {
    render() {
        return (
            <div className="activate">
                <div className="row">
                    <div className="col-sm-6" id="activat-col-one">
                        <p className="Install-the-Onsurity">Install the Onsurity app
                            on your Samsung Galaxy S9 and click the activate
                            button in the My plans section to activate your plan.</p>
                        <div className="activate-social-section">
                            <InputGroup id="activate-input">
                                <Input placeholder="Mobile number" />
                                <InputGroupAddon addonType="append"><Button color="secondary">Send App Link</Button></InputGroupAddon>
                            </InputGroup>
                            <div className="container" id="activity-social-icons">
                                <div className="left-div left-text">
                                    <img src={require("../../../assets/playstore-link.svg")} alt="social-icons" />
                                </div>
                                <div className="right-div right-text">
                                    <img src={require("../../../assets/appstore link.svg")} alt="social-icons" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <img src={require('../../../assets/mybox-selected (2)/58C47447-6146-4BDE-9B63-D949397E3DE1.png')} alt="phone" className="activate-phone"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Activate