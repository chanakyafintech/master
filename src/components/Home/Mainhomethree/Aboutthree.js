import React from 'react'
import Aboutimg01 from '../../../assets/images/about/ceo-image.png';
import Aboutimg02 from '../../../assets/images/about/ceo-image-small.png';

const Aboutthree = () => {
    return (
        <div className="about-three">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-3">
                        <div className="about-three-image">
                            <img src={Aboutimg01} alt="ceo-image" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-title">
                            <h4>What Our CEO say’s</h4>
                        </div>
                        <div className="section-details">
                            <p>
                                The agreement process with Loanlift was hassle-free and efficient.
                                Their team ensured I understood every detail and made the
                                documentation straightforward, giving me confidence throughout the
                                entire journey, Loanlift’s team made the entire agreement.
                            </p>
                        </div>
                        <div className="about-three-ceo">
                            <img src={Aboutimg02} alt="ceo-image" />
                            <div className="about-three-details">
                                <p>Zachary</p>
                                <span>CEO, Loanlift</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-three-points">
                            <h4>Loanlift Core Service Benefits</h4>
                            <ul>
                                <li>Tailored Loan Solutions</li>
                                <li>Competitive Interest Rates</li>
                                <li>Competitive Interest Rates</li>
                                <li>Lowest bank fees</li>
                                <li>Fast and Easy Approval</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Aboutthree;