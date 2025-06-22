import React from 'react'
import Benefitimg01 from '../../../assets/images/shape/benefits-shape-1.png';
import Benefitimg02 from '../../../assets/images/shape/benefits-shape-2.png';
import Benefitimg03 from '../../../assets/images/benefits-image-1.jpg';
import Benefitimg04 from '../../../assets/images/benefits-image-2.jpg';
import Benefitimg05 from '../../../assets/images/benefits-image-3.jpg';

const Benefitsone = () => {
    return (
        <div className="benefits-one">
            <div className="benefits-one-shape-one-1">
                <img src={Benefitimg01} alt="shape" />
            </div>
            <div className="benefits-one-shape-one-2">
                <img src={Benefitimg02} alt="shape" />
            </div>
            <div className="container">
                <div className="heading-box text-center">
                    <span className="heading-subtitle wow fadeInUp animated animated">
                        🤝 BANEFITS
                    </span>
                    <h2 className="heading-title wow fadeInUp animated animated">
                        Our expertise is the key reason
                    </h2>
                </div>
                <div className="row gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="benefits-one-box">
                            <div className="benefits-one-box-image">
                                <img
                                    src={Benefitimg03}
                                    alt="benefits-image"
                                />
                            </div>
                            <div className="benefits-one-box-details">
                                <div className="benefits-one-box-icon">
                                    <i className="flaticon-capital" />
                                </div>
                                <div className="benefits-one-box-title">
                                    <h3>Lowest bank fees</h3>
                                </div>
                                <div className="benefits-one-box-dic">
                                    <p>
                                        Benefit from our lowest bank fees, ensuring more savings and
                                        better financial management for your needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="benefits-one-box middle-box">
                            <div className="benefits-one-box-image">
                                <img
                                    src={Benefitimg04}
                                    alt="benefits-image"
                                />
                            </div>
                            <div className="benefits-one-box-details">
                                <div className="benefits-one-box-icon">
                                    <i className="flaticon-deadline" />
                                </div>
                                <div className="benefits-one-box-title">
                                    <h3>Up to 20.000$ limit</h3>
                                </div>
                                <div className="benefits-one-box-dic">
                                    <p>
                                        Choose loanlift for personalized loans, competitive rates, quick
                                        approval, expert guidance, and flexible repayment options.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="benefits-one-box">
                            <div className="benefits-one-box-image">
                                <img
                                    src={Benefitimg05}
                                    alt="benefits-image"
                                />
                            </div>
                            <div className="benefits-one-box-details">
                                <div className="benefits-one-box-icon">
                                    <i className="flaticon-credit-card" />
                                </div>
                                <div className="benefits-one-box-title">
                                    <h3>Easy in 3 steps</h3>
                                </div>
                                <div className="benefits-one-box-dic">
                                    <p>
                                        Choose loanlift for personalized solutions, competitive rates,
                                        quick approval, expert guidance, flexible terms, trusted
                                        support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Benefitsone;