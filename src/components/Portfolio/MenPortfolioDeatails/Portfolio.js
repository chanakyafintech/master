import React from "react";
import { Link } from "react-router-dom";
import Portimage03 from '../../../assets/images/protfolio/portfolio-2-img-3.jpg';

const Portfolio = () => {
    return (
        <>
            <div className="portfolio-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="heading-box text-center">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    🤝 PORTFOLIO
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Explore our exceptional projects and collaborations with clients.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-y-40 gutter-x-15">
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-item">
                                <div className="portfolio-image">
                                    <img
                                        src={Portimage03}
                                        alt="case-studies-image"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <div className="portfolio-details-inner">
                                        <h4>Quick Funding Solutions</h4>
                                        <p>Small Business </p>
                                    </div>
                                    <Link
                                        to="/Portfoliodetails"
                                        className="portfolio-btn"
                                        tabIndex={-1}
                                    >
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-item">
                                <div className="portfolio-image">
                                    <img
                                        src={Portimage03}
                                        alt="case-studies-image"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <div className="portfolio-details-inner">
                                        <h4>Customer-Centric Lending</h4>
                                        <p>Client Focused</p>
                                    </div>
                                    <Link
                                        to="/Portfoliodetails"
                                        className="portfolio-btn"
                                        tabIndex={-1}
                                    >
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="portfolio-item">
                                <div className="portfolio-image">
                                    <img
                                        src={Portimage03}
                                        alt="case-studies-image"
                                    />
                                </div>
                                <div className="portfolio-details">
                                    <div className="portfolio-details-inner">
                                        <h4>Efficient Loan Processing</h4>
                                        <p>Digital Loans</p>
                                    </div>
                                    <Link
                                        to="/Portfoliodetails"
                                        className="portfolio-btn"
                                        tabIndex={-1}
                                    >
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio;