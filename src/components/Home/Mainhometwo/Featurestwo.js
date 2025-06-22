import React from 'react'
import Slider from 'react-slick';

const Featurestwo = () => {
    const Featureslider1 = {
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
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
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const Featureslider2 = {
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
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
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="features-two">
            <div className="container-fluid p-0">
                <Slider className="features-slider-two" {...Featureslider1}>
                    <div className="features-two-slider-item">
                        <h2>Interest Rates.</h2>
                    </div>
                    <div className="features-two-slider-item">
                        <h2>Principal Amount.</h2>
                    </div>
                    <div className="features-two-slider-item">
                        <h2>Credit Score.</h2>
                    </div>
                    <div className="features-two-slider-item">
                        <h2>Loan Term.</h2>
                    </div>
                    <div className="features-two-slider-item">
                        <h2>Variable Rates.</h2>
                    </div>
                    <div className="features-two-slider-item">
                        <h2>Monthly Installments.</h2>
                    </div>
                    <div className="features-two-slider-item">
                        <h2>Debt Consolidation.</h2>
                    </div>
                </Slider>
                <Slider className="features-slider-three" {...Featureslider2}>
                    <div className="features-three-slider-item">
                        <h3>Interest Rates</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Principal Amount</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Credit Score</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Loan Term</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Variable Rates</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Monthly Installments</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Debt Consolidation</h3>
                    </div>
                    <div className="features-three-slider-item">
                        <h3>Prepayment</h3>
                    </div>
                </Slider>
            </div>
        </div >

    )
}
export default Featurestwo;