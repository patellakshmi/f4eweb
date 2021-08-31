import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../img/scrollar/Scroll1.jpg';
import Image2 from '../../img/scrollar/Scroll2.jpg';
import Image3 from '../../img/scrollar/Scroll3.jpg';
import Image4 from '../../img/scrollar/Scroll4.jpg';
import Image5 from '../../img/scrollar/Scroll5.jpg';
import Image6 from '../../img/scrollar/Scroll6.jpg';


const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

class ImageScroller extends  Component{
    render() {
        return (
            <div style={{paddingTop:10, paddingLeft:0}}>
                <div style={{ display: 'block', marginLeft:0, width: window.innerWidth-10, paddingLeft: 10, paddingBottom:10 }}>
                    <Carousel>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={Image2}
                                alt="Image One"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={Image1}
                                alt="Image Two"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={Image3}
                                alt="Image Two"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={Image4}
                                alt="Image Two"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={Image5}
                                alt="Image Two"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={Image6}
                                alt="Image Two"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default ImageScroller;
