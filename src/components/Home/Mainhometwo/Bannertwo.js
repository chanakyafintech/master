import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import CircleType from 'circletype';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner01 from '../../../assets/images/background/banner-two-bg.jpg';
import Banner02 from '../../../assets/images/background/banner-two-bg-2.jpg';
import Banner03 from '../../../assets/images/background/banner-two-bg-3.jpg';
import Banner04 from '../../../assets/images/background/banner-two-bg-4.jpg';

const Bannertwo = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        if (circleRef.current) {
            new CircleType(circleRef.current).radius(91);
        }
    }, []);

    const Bannerslider = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        customPaging: (i) => (
            <div className="custom-dot" style={{ color: "white" }}>
                {["Fast Approval", "LoanLift Advantage", "Flexible Terms", "Hassle-Free"][i]}
            </div>
        ),
    };

    return (
        <section className="banner-two">
            <div className="container-fluid p-0">
                <Slider {...Bannerslider} className="banner-two-slider">
                    {[Banner01, Banner02, Banner03, Banner04].map((banner, index) => (
                        <div key={index} className="banner-two-slider-item">
                            <div className="banner-two-slider-item-image zoom-in">
                                <img src={banner} alt={`banner-${index + 1}`} />
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 m-auto">
                                        <div className="banner-two-info text-center">
                                            <div className="section-details fade-left">
                                                <p>Pioneering Financial Solutions</p>
                                            </div>
                                            <div className="banner-title fade-left">
                                                <h1>Reliable Financial Expertise, Built on Trust and Security.</h1>
                                            </div>
                                            <div className="banner-two-btn">
                                                <Link to="/Contactus" className="btn btn-primary">
                                                    Contact Us <i className="flaticon-next" />
                                                </Link>
                                                <Link to="/Applyaloan" className="btn btn-light">
                                                    Apply Now <i className="flaticon-next" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="banner-two__circle">
                    <span className="banner-two-icon">
                        <i className="flaticon-real-estate" />
                    </span>
                    <div className="curved-circle">
                        <div
                            {...{
                                style: { display: "inline-block" },
                                role: "text",
                                ref: circleRef,
                            }}
                            className="curved-circle--item"
                        >
                            25+ Y E A R S O F E X P E R I E N C E F O R L O A N
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bannertwo;
