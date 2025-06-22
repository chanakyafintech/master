import React from "react";
import Teamdetailimg01 from "../../../assets/images/team/team-10.jpg";
import { Link } from "react-router-dom";
import {Line} from 'rc-progress';

const Teamdetails = () => {
    return (
        <>
            <div className="team-details-section">
                <div className="container">
                    <div className="row gutter-y-30 gutter-x-15">
                        <div className="col-lg-4">
                            <div className="left-side-sticy">
                                <div className="team-details-block">
                                    <div className="team-images">
                                        <img src={Teamdetailimg01} alt="team-image" />
                                    </div>
                                </div>
                                <div className="team-social-media">
                                    <h3>Business Analysis</h3>
                                    <ul>
                                        <li>
                                            <h4>Email Address</h4>
                                            <Link to="mailto:brian.hollifield@Loanlift.com">
                                                brian.hollifield@Loanlift.com
                                            </Link>
                                        </li>
                                        <li>
                                            <h4>Phone Number</h4>
                                            <Link to="tel:(555)123-4567">(555) 123-4567</Link>
                                        </li>
                                        <li>
                                            <h4>LinkedIn</h4>
                                            <Link to="https://www.linkedin.com/in/brianshollifield">
                                                linkedin.com/in/brianshollifield
                                            </Link>
                                        </li>
                                        <li>
                                            <h4>Social Icons</h4>
                                            <ul>
                                                <li>
                                                    <Link to="https://www.facebook.com/" target="_blank">
                                                        <i className="fa-brands fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://x.com/" target="_blank">
                                                        <i className="fa-brands fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.instagram.com/" target="_blank">
                                                        <i className="fa-brands fa-instagram" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://in.linkedin.com/" target="_blank">
                                                        <i className="fa-brands fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="team-details-block">
                                <p>
                                    Brian S. Hollifield is a seasoned Senior Loan Officer at Loanlift
                                    with over 15 years of experience in the financial services industry...
                                </p>
                            </div>

                            <div className="team-details-block">
                                <h4>Career</h4>
                                <p>
                                A career in the loan industry offers diverse opportunities, ranging from loan officers and underwriters to financial analysts and loan processors. Professionals in this field help individuals and businesses secure the funding they need to achieve their financial goals.
                                </p>
                                <ul className="team-details-list">
                                    <li>Degree in Finance</li>
                                    <li>Certified Mortgage Banker (CMB) or CFA</li>
                                    <li>MBA in Business Administration</li>
                                </ul>
                            </div>
                            <div className="team-details-block">
                                <h4>Work Experience</h4>
                                <ul className="team-details-list">
                                    <li>Senior Loan Officer | FinServe Capital</li>
                                    <li>Loan Underwriter | TrustFund Financial</li>
                                    <li>Credit Analyst | PureFinance Solutions</li>
                                </ul>
                            </div>
                            <div className="team-details-block">
                                <h4>Achievements:</h4>
                                <ul className="team-details-list">
                                    <li>Successfully facilitated over $100 million in loans for various clients, contributing to their financial growth and stability.</li>
                                    <li>Received multiple awards for outstanding performance and customer satisfaction in loan consulting.</li>
                                    <li>Developed and implemented innovative loan products that have significantly improved client outcomes.</li>
                                </ul>
                            </div>
                            <div className="team-details-block">
                                <div className="process-group">
                                    <h6>Loan Process</h6>
                                    <div className="loan-process-line">
                                    <Line percent={86} strokeWidth={1.2} strokeColor="#061525" strokeLinecap="butt" trailColor="transparent" />
                                        <div className="loan-process-inner" data-percent="86%">
                                            <p className="loan-process-percentage">86%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="process-group">
                                    <h6>Consultancy</h6>
                                    <div className="loan-process-line">
                                    <Line percent={52} strokeWidth={1.2} strokeColor="#061525" strokeLinecap="butt" trailColor="transparent"/>
                                        <div className="loan-process-inner" data-percent="52%">
                                            <p className="loan-process-percentage">52%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="process-group">
                                    <h6>Financial Services</h6>
                                    <div className="loan-process-line">
                                    <Line percent={97} strokeWidth={1.2} strokeColor="#061525" strokeLinecap="butt" trailColor="transparent"/>
                                        <div className="loan-process-inner" data-percent="97%">
                                            <p className="loan-process-percentage">97%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details-block">
                                <form action="#">
                                    <h4>Team Contact</h4>
                                    <div className="inquiry-form-group-one">
                                        <div className="inquiry-form-group-one-inner">
                                            <label>
                                                <i className="fa-regular fa-user" />
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full Name"
                                                required=""
                                            />
                                        </div>
                                        <div className="inquiry-form-group-one-inner">
                                            <label>
                                                <i className="fa-regular fa-envelope" />
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="inquiry-form-group-one">
                                        <div className="inquiry-form-group-one-inner">
                                            <label>
                                                <i className="fa-solid fa-list" />
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="inquiry-form-group-one">
                                        <label>
                                            <i className="fa-solid fa-message" />
                                        </label>
                                        <textarea
                                            rows={3}
                                            className="form-control"
                                            placeholder="About your requirement"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary">
                                        Inquiry Now <i className="flaticon-next" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Teamdetails;
