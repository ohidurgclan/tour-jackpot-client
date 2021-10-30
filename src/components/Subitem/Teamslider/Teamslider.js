import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../images/team/team-1.jpg';
import img2 from '../../../images/team/team-2.jpg';
import img3 from '../../../images/team/team-3.jpg';
import img4 from '../../../images/team/team-4.jpg';
import img5 from '../../../images/team/team-5.jpg';
import img6 from '../../../images/team/team-6.jpg';
import './Teamslider.css';
import { Container, Row } from "react-bootstrap";
export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
        <Container>
            <Row>

                <Slider ref={slider => (this.slider = slider)} {...settings}>
                    <div>
                        <img src={img1} alt="" />         
                        <h3>1</h3>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <h3>2</h3>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <h3>3</h3>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <h3>4</h3>
                    </div>
                    <div>
                        <img src={img5} alt="" />
                        <h3>5</h3>
                    </div>
                    <div>
                        <img src={img6} alt="" />
                        <h3>6</h3>
                    </div>
                </Slider>
            </Row>
      </Container>
    );
  }
}

