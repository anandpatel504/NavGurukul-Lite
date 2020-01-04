import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import {Carousel} from "react-bootstrap";

const Carousel2 = () => {
    return (
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Hello Anand</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://headspring.com/wp-content/uploads/2018/06/Build-Vs-Buy-Pt-1-Value-of-Custom-Software.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>NavGurukul Lite Teams</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn-media-1.freecodecamp.org/images/1*Amg2pTBZ3nAfS5-K9IvyGQ.jpeg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Software Developers</h3>
            <p>Software quality begins with the quality of the requirements.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}
export default Carousel2;