import React from "react";
import Footerlogo01 from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footertwo = () => {
    return (
        <>
            <footer className="footer-two">
                <div className="logo-shape">
                    <p>LOANLIFT</p>
                </div>
                <div className="container">
                    <div className="footer-main-one">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-7">
                                <div className="footer-two-contact">
                                    <div className="footer-two-contact-inner">
                                        <span>Call us</span>
                                        <h5>
                                            <Link to="tel:+1098.45611">+1 098.456 11</Link>
                                        </h5>
                                    </div>
                                    <div className="footer-two-contact-inner">
                                        <span>Our Location</span>
                                        <h5>
                                            Suite 794 49823 Glover Fields, North Leighaport, MO 42769-8902
                                        </h5>
                                    </div>
                                    <div className="footer-two-contact-inner">
                                        <span>Our Mail</span>
                                        <h5>
                                            <Link to="mailto:help@company.com">help@company.com</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-5">
                                <div className="footer-two-link">
                                    <h3>Services</h3>
                                    <ul>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Servicesdetails">Personal Loans</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Servicesdetails">Business Loans</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Servicesdetails">Mortgage Loans</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Servicesdetails">Emergency Loans</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Servicesdetails">Student Loans</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Servicesdetails">Small Business Loans</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6">
                                <div className="footer-two-link m-0">
                                    <h3>Page</h3>
                                    <ul>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Aboutus">About Us </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Faq">FAQS</Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Careers">Careers </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Applyloan">Apply a Loan </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Contactus">Contact Us </Link>
                                        </li>
                                        <li>
                                            <i className="flaticon-right-arrow" />
                                            <Link to="/Team">Meet The Team </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="footer-two-subscribe">
                                    <div className="footer-two-logo">
                                        <Link to="#">
                                            <img width={217} src={Footerlogo01} alt="logo" />
                                        </Link>
                                    </div>
                                    <h4>Subscribe To Newsletter</h4>
                                    <p>
                                        Stay up-to-date with the latest trends in digital marketing and
                                        receive i’ve tips and insights by subscribing to our.
                                    </p>
                                    <form className="footer-two-subscribe-form" action="#">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email Address"
                                            required=""
                                        />
                                        <button type="submit" className="subscribe-btn">
                                            {" "}
                                            <i className="flaticon-next" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0">
                    <div className="footer-lower-two">
                        <div className="container">
                            <div className="row row-gap-3">
                                <div className="col-md-6">
                                    <div className="footer-copy-right-one">
                                        <p>© Copyright loanlift.&nbsp;All rights reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="footer-buttom-link text-end">
                                        <ul>
                                            <li>
                                                <Link to="#">Terms &amp; Condition</Link>
                                            </li>
                                            <li>
                                                <Link to="#">Privacy policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footertwo;