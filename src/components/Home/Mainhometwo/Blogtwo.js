import React from 'react'
import { Link } from 'react-router-dom';
import Blogimg01 from '../../../assets/images/shape/blog-two-shape-1.png';
import Blogimg02 from '../../../assets/images/shape/blog-two-shape-2.png';
import Blogimg03 from '../../../assets/images/blog/blog-two-1.jpg';
import Blogimg04 from '../../../assets/images/blog/blog-two-2.jpg';
import Blogimg05 from '../../../assets/images/blog/blog-two-3.jpg';


const Blogtwo = () => {
    return (
        <div className="blog-two">
            <div className="blog-two-shape-1">
                <img src={Blogimg01} alt="shape" />
            </div>
            <div className="blog-two-shape-2">
                <img src={Blogimg02} alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 BLOG
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Recent blog: insights, updates, and tips for your financial journey
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-30">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-two-box">
                            <Link to="/Blogstandard" className="blog-two-image">
                                <img src={Blogimg03} alt="blog-img" />
                            </Link>
                            <div className="blog-two-details">
                                <div className="blog-two-meta">
                                    <Link to="#" className="tagline">
                                        Loan
                                    </Link>
                                    <span>
                                        <Link to="#">10 Jun 2024</Link>
                                    </span>
                                </div>
                                <h5>
                                    <Link to="/Blogstandard">
                                        Fuel your business growth with loanlift’s tailored financing
                                        solutions.
                                    </Link>
                                </h5>
                                <p>
                                    Explore how Loanlift tailored financial solutions help small
                                    businesses thrive. Learn about strategies to maximize.
                                </p>
                                <Link to="/Blogdetails" className="btn-link">
                                    <span>Read More</span>
                                    <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-two-box">
                            <Link to="/Blogstandard" className="blog-two-image">
                                <img src={Blogimg04} alt="blog-img" />
                            </Link>
                            <div className="blog-two-details">
                                <div className="blog-two-meta">
                                    <Link to="#" className="tagline">
                                        Funding
                                    </Link>
                                    <span>
                                        <Link to="#">06 March 2024</Link>
                                    </span>
                                </div>
                                <h5>
                                    <Link to="/Blogstandard">
                                        Loanlift with empowers small business success
                                    </Link>
                                </h5>
                                <p>
                                    Discover the ways Loanlift empowers small businesses to unlock
                                    their growth potential. Read about our.
                                </p>
                                <Link to="/Blogdetails" className="btn-link">
                                    <span>Read More</span>
                                    <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-two-box">
                            <Link to="/Blogstandard" className="blog-two-image">
                                <img src={Blogimg05} alt="blog-img" />
                            </Link>
                            <div className="blog-two-details">
                                <div className="blog-two-meta">
                                    <Link to="#" className="tagline">
                                        Financial
                                    </Link>
                                    <span>
                                        <Link to="#">29 Sup 2024</Link>
                                    </span>
                                </div>
                                <h5>
                                    <Link to="/Blogstandard">
                                        Fast-Track financial goals with quick approvals
                                    </Link>
                                </h5>
                                <p>
                                    Learn how Loanlift quick approval process can fast-track your
                                    financial goals. See how our efficient approach.
                                </p>
                                <Link to="/Blogdetails" className="btn-link">
                                    <span>Read More</span>
                                    <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Blogtwo;