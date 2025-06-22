import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Servimg01 from '../../../assets/images/shape/services-two-shape-1.png';
import Servimg02 from '../../../assets/images/shape/services-two-shape-2.png';
import Servimg03 from '../../../assets/images/services/services-tab-imag.jpg';
import Servimg04 from '../../../assets/images/services/services-tab-imag-2.jpg';
import Servimg05 from '../../../assets/images/services/services-tab-imag-3.jpg';
import Servimg06 from '../../../assets/images/services/services-tab-imag-4.jpg';

const Servicestwo = () => {
    const [activeTab, setActiveTab] = useState('personal-tab');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="services-two">
            <div className="services-two-shape-one-1">
                <img src={Servimg01} alt="shape" />
            </div>
            <div className="services-two-shape-one-2">
                <img src={Servimg02} alt="shape" />
            </div>
            <div className="services-two-inner-bg">
                <div className="container">
                    <div className="row align-items-center gutter-y-30 mb-3 mb-lg-0">
                        <div className="col-lg-7 col-md-12">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated">
                                    🤝 OUR SERVICES
                                </span>
                                <h2 className="heading-title wow fadeInUp animated">
                                    We aim to collaborate by offering our exceptional services.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 text-start text-lg-end">
                            <Link to="/Services2" className="btn btn-outline-secondary">
                                Get Started <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <ul
                        className="nav nav-tabs justify-content-between border-0"
                        id="services-tab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'personal-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('personal-tab')}
                                type="button"
                                role="tab"
                                aria-controls="personal-tab-pane"
                                aria-selected={activeTab === 'personal-tab'}
                            >
                                <i className="flaticon-personal" />
                                <span>Personal Loans</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'mortgage-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('mortgage-tab')}
                                type="button"
                                role="tab"
                                aria-controls="mortgage-tab-pane"
                                aria-selected={activeTab === 'mortgage-tab'}
                            >
                                <i className="flaticon-real-estate" />
                                <span>Mortgage Loans</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'emergency-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('emergency-tab')}
                                type="button"
                                role="tab"
                                aria-controls="emergency-tab-pane"
                                aria-selected={activeTab === 'emergency-tab'}
                            >
                                <i className="flaticon-money-bag-1" />
                                <span>Emergency Loans</span>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'business-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('business-tab')}
                                type="button"
                                role="tab"
                                aria-controls="business-tab-pane"
                                aria-selected={activeTab === 'business-tab'}
                            >
                                <i className="flaticon-signing" />
                                <span>Business Loans</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-content" id="services-tab-content">
                <div
                    className={`tab-pane fade ${activeTab === 'personal-tab' ? 'show active' : ''}`}
                    id="personal-tab-pane"
                    role="tabpanel"
                    aria-labelledby="personal-tab"
                    tabIndex={0}
                >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <img src={Servimg03} alt="services-image" />
                                    <div className="image-shape">
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>7% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>
                                            Personal loans offer a convenient and efficient way to access
                                            funds quickly for diverse purposes. These loans are ideal for
                                            consolidating high-interest debt into a single, manageable
                                            payment, allowing you to streamline your finances.
                                        </p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Flexible Repayment Options</li>
                                        <li>Collateral required for borrowing</li>
                                        <li>Low rates for affordable loans</li>
                                    </ul>
                                    <Link to="/Servicesdetails" className="btn btn-outline-secondary">
                                        Explore Services <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'mortgage-tab' ? 'show active' : ''}`}
                    id="mortgage-tab-pane"
                    role="tabpanel"
                    aria-labelledby="mortgage-tab"
                    tabIndex={0}
                >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <img src={Servimg04} alt="services-image" />
                                    <div className="image-shape">
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>11% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>
                                            Securing a mortgage loan is one of the most significant
                                            financial decisions you'll ever make. At LoanLift, we simplify
                                            the process by offering customized mortgage solutions.
                                        </p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Achieve the dream of owning your home</li>
                                        <li>Manageable payments that fit your budget</li>
                                    </ul>
                                    <Link to="/Servicesdetails" className="btn btn-outline-secondary">
                                        Explore Services <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'emergency-tab' ? 'show active' : ''}`}
                    id="emergency-tab-pane"
                    role="tabpanel"
                    aria-labelledby="emergency-tab"
                    tabIndex={0}
                >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <img src={Servimg05} alt="services-image" />
                                    <div className="image-shape">
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>10% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>
                                            Emergency loans provide quick financial assistance during
                                            urgent situations, such as unexpected medical bills or car
                                            repairs.
                                        </p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Rapid approval for urgent needs</li>
                                        <li>No collateral needed</li>
                                    </ul>
                                    <Link to="/Servicesdetails" className="btn btn-outline-secondary">
                                        Explore Services <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`tab-pane fade ${activeTab === 'business-tab' ? 'show active' : ''}`}
                    id="business-tab-pane"
                    role="tabpanel"
                    aria-labelledby="business-tab"
                    tabIndex={0}
                >
                    <div className="container">
                        <div className="row align-items-start align-items-xl-center gutter-y-30">
                            <div className="col-lg-5">
                                <div className="services-two-image">
                                    <img src={Servimg06} alt="services-image" />
                                    <div className="image-shape">
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="services-two-info">
                                    <div className="services-two-tagline">
                                        <p>8% Interest rate</p>
                                    </div>
                                    <div className="services-two-details">
                                        <p>
                                            Business loans empower entrepreneurs to achieve their goals
                                            and grow their ventures sustainably.
                                        </p>
                                    </div>
                                    <ul className="services-two-features">
                                        <li>Customizable loan terms</li>
                                        <li>Boost cash flow and scalability</li>
                                    </ul>
                                    <Link to="/Servicesdetails" className="btn btn-outline-secondary">
                                        Explore Services <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicestwo;
