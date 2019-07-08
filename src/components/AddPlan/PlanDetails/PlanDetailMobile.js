import React from 'react';
import {
    Button,
   InputGroup, InputGroupAddon, Input
} from 'reactstrap';
class PlanDetailsMobile extends React.Component {
    render() {
        return (
            <div className="PlanDetails">
                <div className="row" id="main-product">
                    <div className="col-4">
                        <div className="product">
                            <img src={require('../../../assets/mybox-selected (2)/cellhelmet-tempered-glass-for-samsung-galaxy-s9.png')} alt="productImage" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <p className="SAMSUNG-GALAXY-S9">SAMSUNG GALAXY S9</p>
                        <p className="-YEAR-SCREEN-PROTEC">1 YEAR SCREEN PROTECTION</p>
                        <p className="-MONTH-OLD">2 MONTH OLD</p>
                    </div>
                </div>
                <div className="row" id="coupen-apply">
                    <br />
                    <div className=" mt-4" style={{ margin: 'auto' }}>
                        <h6 className="Have-a-coupon-code-o ">Have a coupon code or voucher? </h6>
                        <InputGroup id="coupan">
                            <Input placeholder="Coupon Code" id="coupan-code" />
                            <InputGroupAddon addonType="append">
                                <Button id="apply">Apply</Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <h6 className="Coupon-code-is-inval ">Coupon code is invalid, please try another one. </h6>
                    </div>
                </div>
                <div className="row" id="item-details">
                    <div className="col-md-6">
                        <ul className="list-item">
                            <li>Item Total</li>
                            <li>Tax</li>
                            <li>Coupon Discount</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="item-price">
                            <li>₹990</li>
                            <li>₹100</li>
                            <li>-₹100</li>
                        </ul>
                    </div>
                </div>
                <div className="row" id="sum-up">
                    <div className="col-md-6">
                        <ul className="list-item">
                            <li className="to-pay">To Pay</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="item-price">
                            <li className="to-pay-price">₹990</li>
                        </ul>
                    </div>
                    <Button id="check-out">Check Out</Button>
                </div>
            </div>
        );
    }
}
export default PlanDetailsMobile ;