import React from 'react'
import { Link } from 'react-router-dom';

const Pricingplanone = () => {
    return (
        <div className="pricing-one">
            <div className="container">
                <div className="heading-box text-center">
                    <span className="heading-subtitle wow fadeInUp animated animated">
                        🤝 OUR PRICING PLAN
                    </span>
                    <h2 className="heading-title wow fadeInUp animated animated">
                        Discover Our Pricing Plans to Your Financial Needs
                    </h2>
                </div>
                <div className="row gutter-y-40">
                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="pricing-one-item first">
                            <div className="hedding">
                                <i className="flaticon-clock" />
                                <h3>Individual Plan</h3>
                            </div>
                            <ul className="services-list">
                                <li>
                                    {" "}
                                    <i className="fa-solid fa-check" /> 24/7 Support at Any Time
                                </li>
                                <li>
                                    {" "}
                                    <i className="fa-solid fa-check" />
                                    Orientation for Business
                                </li>
                                <li>
                                    {" "}
                                    <i className="fa-solid fa-xmark" />
                                    Quality &amp; Customer Experience
                                </li>
                                <li>
                                    {" "}
                                    <i className="fa-solid fa-xmark" />
                                    Free Consultation Until Cooperation
                                </li>
                                <li>
                                    {" "}
                                    <i className="fa-solid fa-xmark" />
                                    Power And Predictive Dialing
                                </li>
                            </ul>
                            <div className="pricing-box-lower">
                                <div className="pricing">
                                    <h2>$299/</h2>
                                    <p>
                                        Per user/month <br /> billed annually*
                                    </p>
                                </div>
                                <Link to="#" className="btn btn-outline-secondary">
                                    Choose Package <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="pricing-one-item popular">
                            <div className="popular-tag">
                                <h6>POPULAR</h6>
                            </div>
                            <div className="hedding">
                                <i className="flaticon-growth" />
                                <h3>Business Plan</h3>
                            </div>
                            <ul className="services-list">
                                <li>
                                    <i className="fa-solid fa-check" />
                                    24/7 Support at Any Time
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    Orientation for Business
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    Quality &amp; Customer Experience
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    Free Consultation Until Cooperation
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    Power And Predictive Dialing
                                </li>
                            </ul>
                            <div className="pricing-box-lower">
                                <div className="pricing">
                                    <h2>$499/</h2>
                                    <p>
                                        Per user/month <br /> billed annually*
                                    </p>
                                </div>
                                <Link to="#" className="btn btn-outline-primary">
                                    Choose Package <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 p-0">
                        <div className="pricing-one-item last">
                            <div className="hedding">
                                <i className="flaticon-clock" />
                                <h3>Corporate Plan</h3>
                            </div>
                            <ul className="services-list">
                                <li>
                                    <i className="fa-solid fa-check" />
                                    24/7 Support at Any Time
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    Orientation for Business
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    Quality &amp; Customer Experience
                                </li>
                                <li>
                                    <i className="fa-solid fa-xmark" />
                                    Free Consultation Until Cooperation
                                </li>
                                <li>
                                    <i className="fa-solid fa-xmark" />
                                    Power And Predictive Dialing
                                </li>
                            </ul>
                            <div className="pricing-box-lower">
                                <div className="pricing">
                                    <h2>$399/</h2>
                                    <p>
                                        Per user/month <br /> billed annually*
                                    </p>
                                </div>
                                <Link to="#" className="btn btn-outline-secondary">
                                    Choose Package <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="pricing-lower">
                            <div className="pricing-lower-inner">
                                <i className="flaticon-free-trial" />
                                <h5>Get 30 day free trial</h5>
                            </div>
                            <div className="pricing-lower-inner">
                                <i className="flaticon-wallet" />
                                <h5>No any hidden fees pay</h5>
                            </div>
                            <div className="pricing-lower-inner">
                                <i className="flaticon-availability" />
                                <h5>You can cancel anytime</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Pricingplanone;