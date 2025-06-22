import React from 'react'
import Serviceimg01 from '../../../assets/images/shape/services-three-shape-1.png';
import Serviceimg02 from '../../../assets/images/shape/services-three-shape-2.png';
import { Link } from 'react-router-dom';

const Servicesthree = () => {
    return (
        <div className="services-three">
            <div className="services-three-shape-one-1">
                <img src={Serviceimg01} alt="shape" />
            </div>
            <div className="services-three-shape-one-2">
                <img src={Serviceimg02} alt="shape" />
            </div>
            <div className="container">
                <div className="heading-box text-center">
                    <span className="heading-subtitle wow fadeInUp animated animated">
                        🤝 OUR SERVICES
                    </span>
                    <h2 className="heading-title wow fadeInUp animated animated">
                        Explore our comprehensive services
                    </h2>
                </div>
                <div className="row gutter-y-40">
                    <div className="col-xl-4 col-md-6">
                        <div className="services-three-box">
                            <div className="services-three-box-icon">
                                <i className="flaticon-personal" />
                            </div>
                            <hr />
                            <span>01</span>
                            <div className="services-three-box-title">
                                <h3>Personal Loans</h3>
                            </div>
                            <div className="services-three-box-info">
                                <p>
                                    Personal loans offer flexible funding for various needs, from
                                    consolidating debt to covering unexpected expenses.
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="btn-link">
                                Read More <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-three-box">
                            <div className="services-three-box-icon">
                                <i className="flaticon-money-bag" />
                            </div>
                            <hr />
                            <span>02</span>
                            <div className="services-three-box-title">
                                <h3>Business Loans</h3>
                            </div>
                            <div className="services-three-box-info">
                                <p>
                                    Business loans provide essential funding to grow your enterprise,
                                    manage cash flow, or invest in new opportunities.
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="btn-link">
                                Read More <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-three-box">
                            <div className="services-three-box-icon">
                                <i className="flaticon-mortgage-loan" />
                            </div>
                            <hr />
                            <span>03</span>
                            <div className="services-three-box-title">
                                <h3>Mortgage Loans</h3>
                            </div>
                            <div className="services-three-box-info">
                                <p>
                                    Mortgage loans provide financing needed to purchase a home,
                                    offering competitive rates &amp; flexible repayment terms.
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="btn-link">
                                Read More <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-three-box">
                            <div className="services-three-box-icon">
                                <i className="flaticon-loan-1" />
                            </div>
                            <hr />
                            <span>04</span>
                            <div className="services-three-box-title">
                                <h3>Emergency Loans</h3>
                            </div>
                            <div className="services-three-box-info">
                                <p>
                                    Emergency loans provide quick, essential funding to cover
                                    unexpected expenses, ensuring financial stability during crises.
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="btn-link">
                                Read More <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-three-box">
                            <div className="services-three-box-icon">
                                <i className="flaticon-mortarboard" />
                            </div>
                            <hr />
                            <span>05</span>
                            <div className="services-three-box-title">
                                <h3>Student Loans</h3>
                            </div>
                            <div className="services-three-box-info">
                                <p>
                                    Student loans can help you achieve educational goals but plan
                                    carefully to manage repayment effectively.
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="btn-link">
                                Read More <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="services-three-box">
                            <div className="services-three-box-icon">
                                <i className="flaticon-money-bag-1" />
                            </div>
                            <hr />
                            <span>06</span>
                            <div className="services-three-box-title">
                                <h3>Small Business Loans</h3>
                            </div>
                            <div className="services-three-box-info">
                                <p>
                                    Personal loans offer flexible funding for various needs, from
                                    consolidating debt to covering unexpected expenses.
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="btn-link">
                                Read More <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Servicesthree;