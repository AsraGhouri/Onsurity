import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../css/AddPlanCarousel.css'
import PlanForm from '../AddPlanSections/PlanForm'
import AddPlancards from '../addPlanCards/AddPlanCards'
import Activate from '../Activate/Activate'
import PlanDetails from '../PlanDetails/PlanDetails'
class AddPlanCarousel extends React.PureComponent {

    items = [<div className="plan-form-main-div"><PlanForm /></div>, <div>< AddPlancards /></div>, <div><PlanDetails /></div>, <div><Activate /></div>]

    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 1 } },
        galleryItems: this.galleryItems(),
        active: false
    }

    slideTo = (i) => {
        this.setState({ currentIndex: i });
    }

    onSlideChanged = (e) => {
        this.setState({ currentIndex: e.item });
        this.setState({ active: true });
    }

    slideNext = () => {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    slide = (index) => {
        this.setState({ currentIndex: index });
        if (this.state.currentIndex === index) {
            this.setState({ active: true });
        }
    }
    thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

    galleryItems() {
        return this.items.map((i) => <h2 key={i}> {i}</h2>)
    }

    render() {
        const handleOnDragStart = e => e.preventDefault()
        // const classNames = this.currentIndex === index ? ' __active' : '';
        const { galleryItems, responsive, currentIndex, active } = this.state
        // let classes = classnames('active', {active: this.state.active});
        return (
            <div className="add-plan-carousel" >
                <div class="AddPlanCarousel-contaiener" style={{height: currentIndex === 0 ? '500px' : 'auto' }}>
                    <div className="progressbar-container col-md-6 offset-md-3" id="progressbar-container">
                        <ul class="add-plan-progressbar">
                            <li className={currentIndex >= 0 ? 'index-active' : 'done'}>
                                <button id={currentIndex >= 0 ? 'active-plan' : 'plan-icon'} onClick={() => this.slide(0)}>
                                    <img src={require('../../../assets/mybox-selected (2)/25.1.svg')} alt="phone" className="phone-image" />
                                </button>
                                <p>Select Device</p>
                            </li>
                            <li className={currentIndex >= 1 ? 'index-active' : 'active'}>
                                <button id={currentIndex >= 1 ? 'active-plan' : 'plan-icon'} onClick={() => this.slide(1)} >
                                    <img src={require('../../../assets/mybox-selected (2)/6.1.svg')} alt="phone" className="phone-image" />
                                </button>
                                <p>Select A Plan</p>
                            </li>
                            <li className={currentIndex >= 2 ? 'index-active' : 'active'}>
                                <button id={currentIndex >= 2 ? 'active-plan' : 'plan-icon'} onClick={() => this.slide(2)} className={currentIndex === 2 ? 'active-plan' : ''}>
                                    <img src={require('../../../assets/mybox-selected (2)/25.3.svg')} alt="phone" className="phone-image" />
                                </button>
                                <p>Checkout</p>
                            </li>
                            <li class="inactive">
                                <button id={currentIndex >= 3 ? 'active-plan' : 'plan-icon'} onClick={() => this.slide(3)} className={currentIndex === 3 ? 'active-plan' : ''}>
                                    <img src={require('../../../assets/mybox-selected (2)/6.3.svg')} alt="phone" className="phone-image" />
                                </button>
                                <p>Activate</p>
                            </li>
                        </ul>
                    </div>
                    {/* </div> */}
                    <AliceCarousel
                        dotsDisabled={true}
                        buttonsDisabled={true}
                        mouseDragEnabled={true}
                        items={galleryItems}
                        swipeDisabled
                        responsive={responsive}
                        slideToIndex={currentIndex}
                        onSlideChanged={this.onSlideChanged}
                    />
                </div>
            </div >
        )
    }
}
export default AddPlanCarousel;
