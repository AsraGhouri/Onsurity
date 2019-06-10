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
        return this.items.map((i) => <div key={i} className="col-sm-12 recent-post-slider">
            <Card>
                <img width="100%" src={require('../../../assets/apple_imac_21inch_201702_thumb800.jpg')} alt="cap" />
                <CardBody>
                    <CardLink href="#">
                        <Button id="insurance">Business</Button>
                    </CardLink>
                    <CardLink href="#">
                        <Button id="insurance">Business</Button>
                    </CardLink>
                    <p className="Lorem-ipsum text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                </CardBody>
            </Card>
        </div>)
    }
    stagePadding = {
        paddingLeft: 0,
        paddingRight: 30,
    }

    render() {
        const { galleryItems, responsive, currentIndex } = this.state
        return (
            <div className="">
                <p className="post-slider-para">Recent Post</p>
                <AliceCarousel
                    buttonsDisabled={true}
                    dotsDisabled={true}
                    items={galleryItems}
                    responsive={responsive}
                    slideToIndex={currentIndex}
                    mouseDragEnabled={true}
                    stagePadding={this.stagePadding}
                    onSlideChanged={this.onSlideChanged}
                />
            </div>
        )
    }
}


export default Gallery;