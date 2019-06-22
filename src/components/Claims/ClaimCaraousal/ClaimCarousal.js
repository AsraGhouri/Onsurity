import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../css/ClaimCarousal.css'
import classnames from 'classnames';
// import { Link, animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class ClaimCarousal extends React.PureComponent {
    items = [<div className="box one" id="install">
        <div className="row mt-4" style={{marginRight: '0px'}}>
            <div className="col-lg-5 offset-lg-2" style={{ width: '100%' }}>
                <p className="number-of-carousal">01</p>
                <img src={require('../../../assets/claims/01 claim.svg')} className="carousal-image" />
            </div>
            <div className="col-lg-5" >
                <div className="carousal-image-details">
                    <p className="record"> Install the app </p>
                    <p>Once you install the app, you can activate your device protection plan with just a tap.</p>
                </div>
            </div>
        </div>
    </div>, <div className="box two" id="tap">
        <div className="row mt-4" style={{marginRight: '0px'}}>
            <div className="col-lg-5 offset-lg-2">
                <p className="number-of-carousal">02</p>
                <img src={require('../../../assets/claims/02 claim.svg')} className="carousal-image" />
            </div>
            <div className="col-lg-5">
                <div className="carousal-image-details">
                    <p className="record"> Tap ‘Report Damage’</p>
                    <p>In ‘My Plans’ tab, select the plan for the damaged device and tap ‘Report Damage’.</p>
                </div>
            </div>
        </div>
    </div>, <div className="box three" id="record">
        <div className="row mt-4" style={{marginRight: '0px'}}>
            <div className="col-lg-5 offset-lg-2">
                <p className="number-of-carousal">03</p>
                <img src={require('../../../assets/claims/03 claim.svg')} className="carousal-image" />
            </div>
            <div className="col-lg-5">
                <div className="carousal-image-details">
                    <p className="record"> Record </p>
                    <p>Click the record button that appears and follow some quick on-screen instructions to file the claim. </p>
                </div>
            </div>
        </div>
    </div>]

    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 1 } },
        galleryItems: this.galleryItems(),
        active: false
    }

    slideTo = (i) => {this.setState({ currentIndex: i });
}

    onSlideChanged = (e) => {this.setState({ currentIndex: e.item });
    this.setState({active: true});}

    slideNext = () => {this.setState({ currentIndex: this.state.currentIndex + 1 });
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
            <div className="row">
                <AliceCarousel
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    mouseDragEnabled={true}
                    items={galleryItems}
                    responsive={responsive}
                    slideToIndex={currentIndex}
                    onSlideChanged={this.onSlideChanged}
                />
                 <div id="claim-side-nav">
                    <ul className="claim-side-nav-ul">
                        <li onClick={() => this.slide(0)} className={currentIndex === 0 ? 'active' : ''}> Install</li>
                        <li onClick={() => this.slide(1)} className={currentIndex === 1  ? 'active' : ''}>Tap</li>
                        <li onClick={() => this.slide(2)} className={currentIndex === 2  ? 'active' : ''}>Record</li>
                    </ul>
                </div>
            </div >
        )
    }
}
export default ClaimCarousal;