import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import '../css/MobileCarousal.css'
class MobileCarousal extends React.Component {

    items = [<div className="carousal-card" id="section1">
        <h6 className="install">Install</h6>
        <h6 className="tap" onClick={() => this.slide(1)}>Tap
                            <img src={require('../../../assets/1- arrow right.svg')} alt="arrow-right" className="arrow-right" /></h6>
        <Card>
            <CardText id="mobile-slide-number">01</CardText>
            <CardImg width="100%" src={require('../../../assets/claims/01 claim.svg')} alt="Card image cap" />
            <CardBody>
                <CardTitle>Install the app</CardTitle>
                <CardText>Install the Onsurity app on the device you have the protection for. Type in your phone
                 number below to get the app link or get it on the App store or Google Play.</CardText>
            </CardBody>
        </Card>
    </div>, <div className="carousal-card" id="section2">
        <h6 className="install">Tap</h6>
        <div className="row">
            <h6 className="record-left col-6"  onClick={() => this.slide(0)}>Install</h6>
            <h6 className="tap col-6" onClick={() => this.slide(2)}>Record
                            <img src={require('../../../assets/1- arrow right.svg')} alt="arrow-right" className="arrow-right" /></h6>
        </div>
        <Card>
            <CardText id="mobile-slide-number">02</CardText>
            <CardImg width="100%" src={require('../../../assets/claims/02 claim.svg')} alt="Card image cap" />
            <CardBody>
                <CardTitle>Tap ‘Report Damage’</CardTitle>
                <CardText>In ‘My Plans’ tab, select the plan for the damaged device and tap ‘Report Damage’.</CardText>
            </CardBody>
        </Card>
    </div>, <div className="carousal-card" id="section3">
        <h6 className="install">Record</h6>
        <h6 className="record-left" onClick={() => this.slide(1)}><img src={require('../../../assets/1- arrow left.svg')} alt="arrow-right" className="arrow-right" /> Tap
                            </h6>
        <Card>
            <CardText id="mobile-slide-number">03</CardText>
            <CardImg width="100%" src={require('../../../assets/claims/03 claim.svg')} alt="Card image cap" />
            <CardBody>
                <CardTitle>Record</CardTitle>
                <CardText>Click the record button that appears and follow some quick on-screen instructions to file the claim. </CardText>
            </CardBody>
        </Card>
    </div>]

    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 1 } },
        galleryItems: this.galleryItems(),
    }

    slideTo = (i) => this.setState({ currentIndex: i })

    onSlideChanged = (e) => this.setState({ currentIndex: e.item })

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    slide = (index) => {
        this.setState({ currentIndex: index })
    }
    thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

    galleryItems() {
        return this.items.map((i) => <h2 key={i}> {i}</h2>)
    }
    stagePadding = {
        paddingLeft: 30,
        paddingRight: 10,
    }
    render() {
        const { galleryItems, responsive, currentIndex } = this.state
        return (
            <div >
                <div id="claim-top-nav">
                    <ul className="claim-mobile-side-nav-ul">
                        <li onClick={() => this.slide(0)} className={currentIndex === 0 ? 'active' : ''}> Install</li>
                        <li onClick={() => this.slide(1)} className={currentIndex === 1 ? 'active' : ''}>Tap</li>
                        <li onClick={() => this.slide(2)} className={currentIndex === 2 ? 'active' : ''}>Record</li>
                    </ul>
                </div>
                <AliceCarousel
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    mouseDragEnabled={true}
                    items={galleryItems}
                    responsive={responsive}
                    slideToIndex={currentIndex}
                    stagePadding={this.stagePadding}
                    onSlideChanged={this.onSlideChanged}
                />
            </div >
        );
    }
}
export default MobileCarousal;