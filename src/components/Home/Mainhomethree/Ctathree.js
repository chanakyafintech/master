import React from 'react'
import { Link } from 'react-router-dom';
import Ctathimg01 from '../../../assets/images/shape/cta-three-shape-1.png';
import Ctathimg02 from '../../../assets/images/shape/cta-three-shape-2.png';

const Ctathree = () => {
    return (
        <div className="cta-three">
            <div className="cta-three-shape-one-1">
                <img src={Ctathimg01} alt="shape" />
            </div>
            <div className="cta-three-shape-one-2">
                <img src={Ctathimg02} alt="shape" />
            </div>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-xl-7 col-lg-12">
                        <div className="heading-box heading-white">
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Empower your financial journey with personalized loan solutions
                            </h2>
                        </div>
                        <div className="section-details">
                            <p>
                                With Loanlift Financial, you have the power to take control of your
                                financial future. Our expert solutions.Empower your financial
                                journey with personalized
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-12 text-end">
                        <div className="cta-three-btn">
                            <Link to="/Contactus" className="btn btn-primary">
                                Get Started <i className="flaticon-next" />
                            </Link>
                            <Link to="#" className="btn-link">
                                Join the Loanlift Community <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                </div>
                <ul className="cta-details-three">
                    <li>
                        <Link to="mailto:Loanlift@gmail.com">
                            <i className="flaticon-envelope" /> Loanlift@gmail.com
                        </Link>
                    </li>
                    <li>
                        <Link to="tel:+926668880000">
                            <i className="flaticon-whatsapp" /> +92 666 888 0000
                        </Link>
                    </li>
                    <li>
                        <i className="flaticon-24-7" /> 24/7 All Loan Services Available
                    </li>
                    <li>
                        <i className="flaticon-availability" /> Mon to Fri: 9 am to 6 pm
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Ctathree;