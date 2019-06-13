import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import {
    Button,
    Card,
    CardBody,
    CardLink,
} from 'reactstrap';
class Gallery extends React.Component {
    items = [1, 2, 3, 4, 5]

    state = {
        currentIndex: 0,
        responsive: { 1024: { items: 1 } },
        galleryItems: this.galleryItems(),
    }

    slideTo = (i) => this.setState({ currentIndex: i })

    onSlideChanged = (e) => this.setState({ currentIndex: e.item })

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

    thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>

    galleryItems() {
        return this.items.map((i) => <div key={i} className="col-sm-10 offset-sm-1">
            <p className="I-experienced-a-fraud">I experienced a fraud on my credit card and immediately called OneAssist to get it blocked.
                The agent was very helpful and blocked my cards immediately. The overall experience was very good.</p>
            <p className="Ketan-Mehta">Ketan Mehta</p>
            <p className="Pune">Pune</p>
        </div>)
    }

    render() {
        const { galleryItems, responsive, currentIndex } = this.state
        return (
            <div className="pros">
                <AliceCarousel
                    autoPlay={true}
                    autoPlayInterval={2000}
                    buttonsDisabled={true}
                    dotsDisabled={false}
                    items={galleryItems}
                    responsive={responsive}
                    slideToIndex={currentIndex}
                    mouseDragEnabled={true}
                    onSlideChanged={this.onSlideChanged}
                />
                <div className="div">
                    <button className="prev-btn" onClick={() => this.slidePrev()}>
                        <img src={require('../../../assets/1- arrow left.svg')} alt="" />
                    </button>
                    <button className="next-btn" onClick={() => this.slideNext()}>
                        <img src={require('../../../assets/1- arrow right.svg')} alt="" />
                    </button>
                </div>

            </div>
        )
    }
}


export default Gallery;