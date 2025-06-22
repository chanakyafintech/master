import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick'
import Bannerimg01 from '../../../assets/images/shape/banner-three-shape-1.png';
import Bannerimg02 from '../../../assets/images/shape/banner-three-shape-2.png';
import Bannerimg03 from '../../../assets/images/banner-three-thumb.jpg';
import Bannerimg04 from '../../../assets/images/partner-logo/whait-Logo_1.svg';
import Bannerimg05 from '../../../assets/images/partner-logo/whait-Logo_2.svg';
import Bannerimg06 from '../../../assets/images/partner-logo/whait-Logo_3.svg';
import Bannerimg07 from '../../../assets/images/partner-logo/whait-Logo_4.svg';
import Bannerimg08 from '../../../assets/images/partner-logo/whait-Logo_5.svg';
import Bannerimg09 from '../../../assets/images/partner-logo/whait-Logo_6.svg';
import Bannerimg10 from '../../../assets/images/partner-logo/whait-Logo_2.svg';

const Bannerthree = () => {
    const [ytshow, setytshow] = useState(false);
    const Bannerslider = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className="banner-three">
                <div className="banner-three-shape-1">
                    <img src={Bannerimg01} alt="shape" />
                </div>
                <div className="banner-three-shape-2">
                    <img src={Bannerimg02} alt="shape" />
                </div>
                <div className="container">
                    <div className="row gutter-y-40">
                        <div className="col-12">
                            <div className="banner-three-video" >
                                <img src={Bannerimg03} alt="banner-video" />
                                <Link
                                    to="#"
                                    className="about-three-video-btn" onClick={() => setytshow(true)}
                                >
                                    <i className="fa-solid fa-play" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="heading-box heading-white">
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    We’ve earned our customers trust by blending creativity &amp;
                                    tailored loan solutions
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-details">
                                <p>
                                    we empower our clients with specialized financial insights
                                    strategies. Whether you're navigating personal loans or seeking
                                    guidance business financing.
                                </p>
                            </div>
                            <div className="banner-three-contact">
                                <Link to="/Contactus" className="btn btn-primary">
                                    Get Started <i className="flaticon-next" />
                                </Link>
                                <Link to="tel:+020-098-45611" className="btn-link">
                                    <i className="flaticon-phone-call" /> +020-098-456 11
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <Slider className="partner-slider-two" {...Bannerslider}>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg04}
                                alt="partner-logo"
                            />
                        </div>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg05}
                                alt="partner-logo"
                            />
                        </div>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg06}
                                alt="partner-logo"
                            />
                        </div>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg07}
                                alt="partner-logo"
                            />
                        </div>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg08}
                                alt="partner-logo"
                            />
                        </div>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg09}
                                alt="partner-logo"
                            />
                        </div>
                        <div className="partner-slider-two-item">
                            <img
                                src={Bannerimg10}
                                alt="partner-logo"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
            {ytshow &&
                <div className="YouTubePopUp-Wrap">
                    <div className="YouTubePopUp-Content">
                        <span className="YouTubePopUp-Close" onClick={() => setytshow(false)} />
                        <iframe
                            src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                            allowFullScreen="allowfullscreen"
                        />
                    </div>
                </div>
            }
        </>
    )
}
export default Bannerthree;