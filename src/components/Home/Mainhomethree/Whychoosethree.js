import React from 'react'
import Whymchoosetimg01 from '../../../assets/images/why-choose-three-image.jpg';
import { Link } from 'react-router-dom';
import NumberCounter from 'number-counter';

const Whychoosethree = () => {
    return (
        <div className="why-choose-three">
            <div className="why-choose-logo-shape">
                <p>LOANLIFT</p>
            </div>
            <div className="why-choose-three-image">
                <img
                    src={Whymchoosetimg01}
                    alt="why-choose-image"
                />
                <div className="image-shape">
                    <span />
                    <span />
                </div>
            </div>
            <div className="container">
                <div className="custom-container">
                    <div className="row align-items-center gutter-y-30">
                        <div className="col-lg-6 col-md-12 why-choose-three-left">
                            <div className="heading-box heading-white">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    🤝 WHY CHOOSE US
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Why loanlift is the right choice
                                </h2>
                            </div>
                            <div className="section-details">
                                <p>
                                    Choosing Loanlift means partnering with a financial provider that
                                    prioritizes your unique needs. We offer customized loan solutions
                                    your goals.
                                </p>
                            </div>
                            <ul className="why-choose-three-list">
                                <li>Flexible Repayment Terms</li>
                                <li>Reliable Support</li>
                                <li>Personalized Loan Solutions</li>
                                <li>All Loan Solutions</li>
                            </ul>
                            <Link to="#" className="btn btn-primary">
                                know more <i className="flaticon-next" />
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-12 why-choose-three-right">
                            <ul className="why-choose-three-counter">
                                <li>
                                    <h6 data-target={25} data-symbol="K" >
                                    <NumberCounter end={25} start={0} postFix="K" />
                                    </h6>
                                    <p className="lead">
                                        we prioritize a seamless and personalized client experience.
                                    </p>
                                </li>
                                <li>
                                    <h6 data-target={47} data-symbol="+">
                                     <NumberCounter end={47} start={0} postFix="+" />
                                     </h6>
                                    <p className="lead">
                                        With years of industry experience, our knowledgeable.
                                    </p>
                                </li>
                                <li>
                                    <h6 data-target={99} data-symbol="%">
                                    <NumberCounter end={99} start={0} postFix="%"/>
                                    </h6>
                                    <p className="lead">
                                        {" "}
                                        Experience the benefits of competitive interest rates.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Whychoosethree;