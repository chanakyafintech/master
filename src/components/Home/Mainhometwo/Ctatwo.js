import React from 'react'
import Ctaimg01 from '../../../assets/images/cta/cta-3.jpg';
import Ctaimg02 from '../../../assets/images/cta/cta-4.jpg';

const Ctatwo = () => {
    return (
        <div className="cta-two">
            <div className="container-fluid">
                <div className="cta-two-box-one">
                    <div className="cta-two-category-box">
                        <h2 className="cta-two-category-title">Your business needs</h2>
                        <span>
                            <img
                                className="cta-two-category-img"
                                src={Ctaimg01}
                                alt="cta-two-category-img-4"
                            />
                        </span>
                    </div>
                </div>
                <div className="cta-two-box-two">
                    <div className="cta-two-category-box">
                        <span>
                            <img
                                className="cta-two-category-img"
                                src={Ctaimg02}
                                alt="cta-two-category-img-5"
                            />
                        </span>
                        <h2 className="cta-two-category-title">Ensuring consistent</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ctatwo;