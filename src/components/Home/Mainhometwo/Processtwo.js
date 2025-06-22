import React from 'react'
import Slider from 'react-slick';

const Processtwo = () => {
    const Processslider = {
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        variableWidth: true
    }
    return (
        <div className="process-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-8">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 OUR PROCESS
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Our process: streamlined steps to secure your loanlift loan
                            </h2>
                        </div>
                    </div>
                </div>
                <Slider className="process-two-slider" {...Processslider}>
                    <div className="process-two-slider-item">
                        <div className="step-no">01</div>
                        <div className="process-two-box-outer">
                            <div className="process-two-box">
                                <div className="process-two-box-icon">
                                    <i className="flaticon-application" />
                                </div>
                                <div className="process-two-box-title">
                                    <h3>Application</h3>
                                    <p>
                                        Start by filling out our easy online application form. Provide
                                        basic information about yourself and your financial needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="process-two-slider-item">
                        <div className="step-no">02</div>
                        <div className="process-two-box-outer">
                            <div className="process-two-box">
                                <div className="process-two-box-icon">
                                    <i className="flaticon-contract" />
                                </div>
                                <div className="process-two-box-title">
                                    <h3>Documentation</h3>
                                    <p>
                                        Upon approval, you'll receive clear instructions on the required
                                        documentation. This may include income verification.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="process-two-slider-item">
                        <div className="step-no">03</div>
                        <div className="process-two-box-outer">
                            <div className="process-two-box">
                                <div className="process-two-box-icon">
                                    <i className="flaticon-approval" />
                                </div>
                                <div className="process-two-box-title">
                                    <h3>Approval</h3>
                                    <p>
                                        Once your application is reviewed, we aim to provide swift
                                        approval decisions. Our goal is to get you approved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="process-two-slider-item">
                        <div className="step-no">04</div>
                        <div className="process-two-box-outer">
                            <div className="process-two-box">
                                <div className="process-two-box-icon">
                                    <i className="flaticon-money-1" />
                                </div>
                                <div className="process-two-box-title">
                                    <h3>Funding</h3>
                                    <p>
                                        After your documentation is verified and finalized, we initiate
                                        the funding process. Funds are typically deposited.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

    )
}
export default Processtwo;