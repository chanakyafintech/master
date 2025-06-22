import React from 'react';
import NumberCounter from 'number-counter';
import Why01 from '../../../assets/images/shape/why-choose-shape-2.png';
import Why02 from '../../../assets/images/shape/why-choose-shape-2.png';
import Why03 from '../../../assets/images/why-choose-image-1.jpg';

const Whychooseone = () => {
    return (
        <section className="why-choose-section-one">
            <div className="why-choose-shape-one-1">
                <img src={Why01} alt="shape" />
            </div>
            <div className="why-choose-shape-one-2">
                <img src={Why02} alt="shape" />
            </div>
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-xl-9 why-choose-left-one">
                        <div className="heading-box heading-white">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 WHY CHOOSE
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Your trusted partner for personalized loan solutions, expert
                                financial guidance
                            </h2>
                        </div>
                        <div className="why-choose-one-image">
                            <img
                                src={Why03}
                                alt="why-choose-image"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="why-choose-one-box">
                                    <div className="why-choose-box-one-title">
                                        <i className="flaticon-solution" />
                                        <h4>Personalized Loan</h4>
                                    </div>
                                    <p>
                                        We offer customized loan options tailored to meet your specific
                                        financial requirements.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="why-choose-one-box">
                                    <div className="why-choose-box-one-title">
                                        <i className="flaticon-badge" />
                                        <h4>Competitive Rates</h4>
                                    </div>
                                    <p>
                                        Benefit from loanlift competitive rates, designed to make your
                                        loans more affordable.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                                <div className="why-choose-one-box">
                                    <div className="why-choose-box-one-title">
                                        <i className="flaticon-trusted" />
                                        <h4>Trusted Partner</h4>
                                    </div>
                                    <p>
                                        With a commitment to transparency personalized service, we work
                                        you every step of way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-12">
                        <ul className="counter-box-one">
                            <li>
                                <h6 data-target={25} data-symbol="+">
                                <NumberCounter end={25} start={0} postFix="+" />
                                </h6>
                                <span>01</span>
                                <p>Years of trusted expertise</p>
                            </li>
                            <li>
                                <h6 data-target={50} data-symbol="k">
                                <NumberCounter end={50} start={0} postFix="K" />
                                </h6>
                                <span>02</span>
                                <p>Loans approved</p>
                            </li>
                            <li>
                                <h6 data-target={10} data-symbol="K">
                                <NumberCounter end={10} start={0} postFix="K"/>
                                </h6>
                                <span>03</span>
                                <p>Satisfied clients</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Whychooseone;