import React from 'react'
import Ctalogo from '../../assets/images/cta-Logo.png';
import { Link } from 'react-router-dom';

const Ctaone = () => {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-8 col-md-9 col-sm-9 col-9">
                        <div className="cta-title">
                            <h2>
                                We build trust with our customers by combining creativity with
                                tailored business loan solutions.
                            </h2>
                        </div>
                        <Link to="/Contactus" className="btn btn-secondary">
                            Contact us <i className="flaticon-next" />
                        </Link>
                    </div>
                    <div className="col-md-3 col-sm-3 col-3">
                        <img src={Ctalogo} alt="logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Ctaone;