import React from 'react'
import { Link } from 'react-router-dom';
import Bannerbg0 from '../../../assets/images/background/banner-one-bg.jpg';
import Bannerbg from '../../../assets/images/background/banner-one-bg-2.jpg';
import Slider from 'react-slick';

const Bannerone = () => {
    const Bannerslider = {
        dots: true,
        infinite: true,
        speed: 200,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        slidesToScroll: 1
    }
    return (
        <section className="banner-one">
            <div className="container-fluid p-0">
                <Slider className="banner-one-slider" {...Bannerslider}>
                    <div className="banner-one-slider-item">
                        <div className="banner-one-slider-item-image zoom-in">
                            <img
                                src={Bannerbg0}
                                alt="banner-images"
                            />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-8 col-md-10">
                                    <div className="banner-one-info">
                                        <div className="banner-title fade-left">
                                            <h1>Elevate Your Financial Future with LoanLift</h1>
                                        </div>
                                        <div className="section-details fade-left">
                                            <p>
                                                We offer a range of expert services designed to support your
                                                financial journey and business success. Our consultancy
                                                includes tailored financial planning, strategic business
                                                advice.
                                            </p>
                                        </div>
                                        <div className="fade-in-up">
                                            <Link to="/Contactus" className="btn btn-primary">
                                                Contact Us
                                                <i className="flaticon-next" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-one-box">
                                    <div className="banner-one-box-inner">
                                        <i className="flaticon-money-bag" />
                                        <h2>5% Interest</h2>
                                    </div>
                                    <p>
                                        Discover our dependable loan solutions designed to empower your
                                        financial journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-one-slider-item">
                        <div className="banner-one-slider-item-image zoom-in">
                            <img
                                src={Bannerbg}
                                alt="banner-images"
                            />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-8 col-md-10">
                                    <div className="banner-one-info">
                                        <div className="banner-title fade-left">
                                            <h1>Your Partner Financial Growth Success</h1>
                                        </div>
                                        <div className="section-details fade-left">
                                            <p>
                                                We offer a range of expert services designed to support your
                                                financial journey and business success. Our consultancy
                                                includes tailored financial planning, strategic business
                                                advice.
                                            </p>
                                        </div>
                                        <div className="fade-in-up">
                                            <Link to="/Contactus" className="btn btn-primary">
                                                Contact Us
                                                <i className="flaticon-next" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-one-box">
                                    <div className="banner-one-box-inner">
                                        <i className="flaticon-money-bag" />
                                        <h2>5% Interest</h2>
                                    </div>
                                    <p>
                                        Discover our dependable loan solutions designed to empower your
                                        financial journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default Bannerone;