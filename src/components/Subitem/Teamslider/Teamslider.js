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
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <>
        <Slider className="team-slider" ref={slider => (this.slider = slider)} {...settings}>
            <div>
                <img src={img1} alt="" />         
                <h3 className="text-center fw-bold mt-3">Lawra Adam</h3>
                <h5 className="text-center fw-bold">CEO</h5>
            </div>
            <div>
                <img src={img2} alt="" />
                <h3 className="text-center fw-bold mt-3">Anthony Clark</h3>
                <h5 className="text-center fw-bold">Product Manager</h5>
            </div>
            <div>
                <img src={img3} alt="" />
                <h3 className="text-center fw-bold mt-3">Gennila Genny</h3>
                <h5 className="text-center fw-bold">Tour Guide</h5>
            </div>
            <div>
                <img src={img4} alt="" />
                <h3 className="text-center fw-bold mt-3">Ade Gauthier</h3>
                <h5 className="text-center fw-bold">Tour Guide</h5>
            </div>
            <div>
                <img src={img5} alt="" />
                <h3 className="text-center fw-bold mt-3">Addie Galtero</h3>
                <h5 className="text-center fw-bold">Tour Guide</h5>
            </div>
            <div>
                <img src={img6} alt="" />
                <h3 className="text-center fw-bold mt-3">Emma Lane</h3>
                <h5 className="text-center fw-bold">Senior Advisor</h5>
            </div>
        </Slider>
      </>
    );
  }
}

