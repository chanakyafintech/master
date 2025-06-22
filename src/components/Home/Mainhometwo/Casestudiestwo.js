import React from 'react'
import { Link } from 'react-router-dom';
import Caseimg01 from '../../../assets/images/shape/case-study-two-shape.png';
import Caseimg02 from '../../../assets/images/case/case-study-two-1.jpg';
import Caseimg03 from '../../../assets/images/case/case-study-two-2.jpg';
import Caseimg04 from '../../../assets/images/case/case-study-two-3.jpg';
import Caseimg05 from '../../../assets/images/case/case-study-two-4.jpg';

const Casestudiestwo = () => {
    return (
        <div className="case-studies-two">
            <div className="case-studies-two-shape-one-1">
                <img src={Caseimg01} alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 OUR CASE STUDIES
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Loanlift portfolio: empowering financial success through innovation
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid ">
                <div className="case-studies-two-outer">
                    <div className="case-studies-two-item active">
                        <div className="case-studies-two-item-outer">
                            <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                <i className="flaticon-next" />
                            </Link>
                            <h3>
                                Empowering a tech securing funding for growth &amp; innovation
                            </h3>
                        </div>
                        <div className="case-studies-two-item-inner">
                            <div className="case-studies-two-item-image">
                                <img
                                    src={Caseimg02}
                                    alt="case-studies-image"
                                />
                            </div>
                            <div className="case-studies-two-item-info">
                                <div className="case-studies-two-item-info-inner">
                                    <span className="case-studies-two-category">Business Loan</span>
                                    <h4>
                                        <Link to="/Portfoliodetails">
                                            Empowering a tech securing funding for growth &amp; innovation
                                        </Link>
                                    </h4>
                                    <p>Client name : technology Solutions</p>
                                    <p>
                                        A growing tech startup approached LoanLift in need of seed
                                        funding to develop their revolutionary product. Through our
                                        tailored funding solution.
                                    </p>
                                    <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-studies-two-item">
                        <div className="case-studies-two-item-outer">
                            <Link to="#" className="case-studies-two-btn">
                                <i className="flaticon-next" />
                            </Link>
                            <h3>
                                Expanding manufacturing business financing to increase production
                            </h3>
                        </div>
                        <div className="case-studies-two-item-inner">
                            <div className="case-studies-two-item-image">
                                <img
                                    src={Caseimg03}
                                    alt="case-studies-image"
                                />
                            </div>
                            <div className="case-studies-two-item-info">
                                <div className="case-studies-two-item-info-inner">
                                    <span className="case-studies-two-category">Business Loans</span>
                                    <h4>
                                        <Link to="/Portfoliodetails">
                                            Expanding manufacturing business financing to increase
                                            production
                                        </Link>
                                    </h4>
                                    <p>Client name : Centric Lending</p>
                                    <p>
                                        A mid-sized manufacturing company sought financial support to
                                        meet increased demand and expand its operations.
                                    </p>
                                    <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-studies-two-item">
                        <div className="case-studies-two-item-outer">
                            <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                <i className="flaticon-next" />
                            </Link>
                            <h3>
                                Revitalizing a retail business overcoming financial challenges
                            </h3>
                        </div>
                        <div className="case-studies-two-item-inner">
                            <div className="case-studies-two-item-image">
                                <img
                                    src={Caseimg04}
                                    alt="case-studies-image"
                                />
                            </div>
                            <div className="case-studies-two-item-info">
                                <div className="case-studies-two-item-info-inner">
                                    <span className="case-studies-two-category">
                                        Retail Business Loans
                                    </span>
                                    <h4>
                                        <Link to="/Portfoliodetails">
                                            Revitalizing a retail business overcoming financial challenges
                                        </Link>
                                    </h4>
                                    <p>Client name : Debt Restructuring</p>
                                    <p>
                                        we specialize in empowering early-stage businesses with the
                                        tools, insights, and strategies they need to thrive.
                                    </p>
                                    <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case-studies-two-item">
                        <div className="case-studies-two-item-outer">
                            <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                <i className="flaticon-next" />
                            </Link>
                            <h3>
                                Helping a construction firm scale access to capital for major
                                project
                            </h3>
                        </div>
                        <div className="case-studies-two-item-inner">
                            <div className="case-studies-two-item-image">
                                <img
                                    src={Caseimg05}
                                    alt="case-studies-image"
                                />
                            </div>
                            <div className="case-studies-two-item-info">
                                <div className="case-studies-two-item-info-inner">
                                    <span className="case-studies-two-category">
                                        Construction Loans
                                    </span>
                                    <h4>
                                        <Link to="/Portfoliodetails">
                                            Helping a construction firm scale access to capital for major
                                            project
                                        </Link>
                                    </h4>
                                    <p>Client name : Streamlined Application</p>
                                    <p>
                                        A construction firm needed substantial funding to take on larger
                                        projects and expand its service offerings.{" "}
                                    </p>
                                    <Link to="/Portfoliodetails" className="case-studies-two-btn">
                                        <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Casestudiestwo;