import React from 'react'
import Slider from 'react-slick';
import Part01 from '../../../assets/images/partner-logo/Logo_1.svg';
import Part02 from '../../../assets/images/partner-logo/Logo_2.svg';
import Part03 from '../../../assets/images/partner-logo/Logo_3.svg';
import Part04 from '../../../assets/images/partner-logo/Logo_4.svg';
import Part05 from '../../../assets/images/partner-logo/Logo_5.svg';
import Part06 from '../../../assets/images/partner-logo/Logo_1.svg';
import Part07 from '../../../assets/images/partner-logo/Logo_2.svg';
import Part08 from '../../../assets/images/partner-logo/Logo_3.svg';
import Part09 from '../../../assets/images/partner-logo/Logo_4.svg';


const Partnerone = () => {
    const Partnerone={
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
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
        <section className="partner-one">
            <div className="container-fluid">
                <Slider className="partner-slider-one" {...Partnerone}>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part01} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part02} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part03} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part04} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part05} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part06} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part07} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part08} alt="partner-logo" />
                        </div>
                    </div>
                    <div className="partner-slider-one-item">
                        <div className="partner-slider-logo">
                            <img src={Part09} alt="partner-logo" />
                        </div>
                    </div>
                </Slider>
            </div>
        </section>

    )
}
export default Partnerone;