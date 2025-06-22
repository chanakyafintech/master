import React from 'react'
import { Link } from 'react-router-dom';
import Blog01 from '../../../assets/images/shape/blog-shape.png';
import Blog02 from '../../../assets/images/blog/blog-1.jpg';
import Blog03 from '../../../assets/images/blog/blog-3.jpg';
import Blog04 from '../../../assets/images/blog/blog-2.jpg';

const Blogdata=[
    {
        Image: Blog02,
        badge: "LOAN",
        name: "By Deni",
        date: "On 29 Sup 2024",
        content: "Maximizing ROI: how data-driven strategies can transform your business"
    },
    {
        Image: Blog03,
        badge: "FUNDING",
        name: "By Jhon",
        date: "On 05 Jan 2024",
        content: "How to successfully manage your loan repayments: tips and strategies"
    },
    {
        Image: Blog04,
        badge: "FINANACIAL",
        name: "By Elei",
        date: "On 18 Feb 2024",
        content: "The impact of credit scores on loan approval: what you need to know"
    },
    
]
const Blogone = () => {
    return (
        <section className="blog-one">
            <div className="blog-shape-one-1">
                <img src={Blog01} alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 NEWS &amp; TIPS
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Recent News &amp; Blog
                            </h2>
                            <p className="heading-details">
                                Discover effective strategies for managing your loan repayments and
                                staying on track financially. Our tips will help you navigate
                                repayment challenges and achieve financial stability.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-30">
                {Blogdata.map ((data, index) =>
                    <div key={index}
                    className="col-lg-4 col-md-6">
                        <div className="blog-one-box">
                            <div className="blog-one-image">
                                <Link to="/Blogdetails">
                                    <img src={data.Image} alt="blog-image" />
                                </Link>
                                <Link to="#" className="blog-one-tag">
                                    <span>{data.badge}</span>
                                </Link>
                            </div>
                            <div className="blog-one-meta">
                                <p>
                                    <Link to="#">{data.name} </Link>
                                </p>
                                <p>
                                    <Link to="#">{data.date}</Link>
                                </p>
                            </div>
                            <div className="blog-one-details">
                                <h5>
                                    <Link to="/Blogdetails">
                                       {data.content}
                                    </Link>
                                </h5>
                                <Link to="Blogdetails" className="btn-link">
                                    <span>Read More</span>
                                    <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                )}
                </div>
            </div>
        </section>

    )
}
export default Blogone;