import React from 'react';
import '../css/AddPlan.css'
import PlanForm from '../AddPlanSections/PlanForm'
import Activate from '../Activate/Activate'
import PlanDetails from '../PlanDetails/PlanDetails'
import AddPlancardsMobile from '../addPlanCards/AddPlanCardsMobile';
class MobileCarousal extends React.Component {
    items = [
        <div className="plan-form-main-div">
            <div className="container" id="radial-one">
                <div className="row" >
                    <div className="radial-first-row">
                        <div className="" >
                            <div><img src={require('../../../assets/001 on4.svg')} alt="radial" style={{ width: '75px' }} /></div>
                        </div>
                        <div className="" style={{ margin: 'auto' }}>
                            <ul className="" style={{ marginTop: '10px' }}>
                                <li className="select-device">
                                    <img src={require('../../../assets/mybox-selected (2)/23.1(1).svg')} alt="phone" className="device-icon" />
                                    Select a Device
                                </li>
                                <li className="select-plan" onClick={() => this.slide(1)}>
                                    NEXT: Select a Plan
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 style={{ marginTop: '20px' }}>
                    Select A Device
                </h2>
            </div>
            <PlanForm />
        </div>,
        <div>
            <div className="container" id="radial-one">
                <div className="row">
                    <div className="col-2">
                        <p className="back" onClick={() => this.slide(0)}>    BACK</p>

                    </div>
                    <div className="col-2">
                        <div><img src={require('../../../assets/002 on4.svg')} alt="radial" style={{ width: '75px' }} /></div>
                    </div>
                    <div className="col-8">
                        <ul className="radial-list-2" >
                            <li className="select-device">
                                <img src={require('../../../assets/mybox-selected (2)/6.1.svg')} alt="phone" className="device-icon" style={{ width: '20px' }} />
                                Select a Device
                                </li>
                            <li className="select-plan" onClick={() => this.slide(2)}>
                                NEXT: Checkout
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            < AddPlancardsMobile /></div>,
        <div>
            <div className="container" id="radial-one">
                <div className="row">
                    <div className="col-2">
                        <p className="back" onClick={() => this.slide(1)}>    BACK</p>

                    </div>
                    <div className="col-2">
                        <div><img src={require('../../../assets/003 on4.svg')} alt="radial" style={{ width: '75px' }} /></div>
                    </div>
                    <div className="col-8">
                        <ul className="radial-list-2" >
                            <li className="select-device">
                                <img src={require('../../../assets/mybox-selected (2)/6.1.svg')} alt="phone" className="device-icon" style={{ width: '20px' }} />
                                Checkout
                                </li>
                            <li className="select-plan" onClick={() => this.slide(3)}>
                                NEXT: Activate Plan
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <PlanDetails /></div>,
        <div style={{ height: '650px' }}>
            <div className="container" id="radial-one">
                <div className="row">
                    <div className="col-2">
                        <p className="back" onClick={() => this.slide(2)}>    BACK</p>

                    </div>
                    <div className="col-2">
                        <div><img src={require('../../../assets/004 on4.svg')} alt="radial" style={{ width: '75px' }} /></div>
                    </div>
                    <div className="col-8">
                        <ul className="radial-list-2" >
                            <li className="select-device">
                                <img src={require('../../../assets/mybox-selected (2)/6.3.svg')} alt="phone" className="device-icon" style={{ width: '20px' }} />
                                Activate Plan
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Activate />
        </div>
    ]

    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 1 } },
        galleryItems: this.galleryItems(),
    }

    slideTo = (i) => {
        this.setState({ currentIndex: i });
    }

    onSlideChanged = (e) => {
        this.setState({ currentIndex: e.item });
        this.setState({ active: true });
    }
    slide = (index) => {
        this.setState({ currentIndex: index });
    }

    galleryItems() {
        return this.items.map((i) => <h2 key={i}> {i}</h2>)
    }
    
    render() {
        const {currentIndex } = this.state
        return (
            <div className="add-plan-carousel-mb">
                {
                    currentIndex === 0 ? this.items[0] : ''
                }
                {
                    currentIndex === 1 ? this.items[1] : ''
                }
                {
                    currentIndex === 2 ? this.items[2] : ''
                }
                {
                    currentIndex === 3 ? this.items[3] : ''
                }
            </div >
        );
    }
}
export default MobileCarousal;