import React, {useState} from "react";
import { Link } from "react-router-dom";
import port01 from '../../../assets/images/protfolio/portfolio-video-thumb.jpg';
import Port02 from '../../../assets/images/protfolio/portfolio-details-image-1.jpg';
import Port03 from '../../../assets/images/protfolio/portfolio-details-image-2.jpg';
import Port04 from '../../../assets/images/protfolio/portfolio-chart-1.png';
import Port05 from '../../../assets/images/protfolio/portfolio-chart-2.png';

const Details = () => {
    const [ytshow, setytshow] = useState(false);
    return (
        <>
            <div className="portfolio-detail-section">
                <div className="container">
                    <div className="portfolio-block">
                        <div className="portfolio-details-video">
                            <img
                                src={port01}
                                alt="video-thumb"
                            />
                            <Link
                                to="#"
                                className="portfolio-details-video-btn" onClick={() => setytshow(true)}
                            >
                                <i className="fa-solid fa-play" />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="portfolio-block">
                                <div className="protfolio-details-two">
                                    <h3>Loan Planning &amp; Solution</h3>
                                    <p>
                                        Loan planning is crucial for achieving your financial goals
                                        without overburdening your finances. Our Loan Planning &amp;
                                        Solution services offer personalized guidance to help you choose
                                        the right loan product, tailored to your needs. We analyze your
                                        financial situation, assess repayment capacity, and recommend the
                                        best loan options with competitive rates.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-block">
                                <div className="protfolio-details-two">
                                    <h3>Client Background</h3>
                                    <p>
                                        Our client, a rapidly growing small business specializing in
                                        eco-friendly products, had been operating successfully for three
                                        years. With a strong commitment to sustainability and innovation,
                                        the business had established a loyal customer base. However, to
                                        meet increasing demand and expand their product line, they needed
                                        additional financial support. Despite their success, the client
                                        faced challenges in securing the necessary funding due to limited
                                        credit history and fluctuating cash flow. Determined to continue
                                        their growth trajectory.
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-block">
                                <div className="portfolio-image-two">
                                    <div className="portfolio-image-inner">
                                        <img
                                            src={Port02}
                                            alt="portfolio-image"
                                        />
                                    </div>
                                    <div className="portfolio-image-inner">
                                        <img
                                            src={Port03}
                                            alt="portfolio-image"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-block">
                                <h3>Statistics Results</h3>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <p>
                                            Our client, a rapidly growing small business specializing in
                                            eco-friendly products, had been operating successfully for three
                                            years. With a strong commitment to sustainability and
                                            innovation, the business had established a loyal customer base.
                                            However, to meet increasing demand and expand their product
                                            line, they needed additional financial. Our client, a rapidly
                                            growing small business specializing in eco-friendly products,
                                            had been operating successfully for three years.
                                        </p>
                                    </div>
                                    <div className="col-xl-6">
                                        <div
                                            className="portfolio-image-two"
                                            style={{ padding: "0 20px 20px" }}
                                        >
                                            <div className="portfolio-image-two-inner">
                                                <img
                                                    src={Port04}
                                                    alt="chart-image"
                                                />
                                            </div>
                                            <div className="portfolio-image-two-inner">
                                                <img
                                                    src={Port05}
                                                    alt="chart-image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="portfolio-block">
                                <div className="protfolio-details-two">
                                    <h3>Challenges</h3>
                                    <ul>
                                        <li>
                                            <strong>Budget Constraints:</strong> Sarah and James needed to
                                            ensure that the loan amount would be sufficient to cover all
                                            wedding expenses without exceeding their repayment capacity.
                                        </li>
                                        <li>
                                            <strong>Time Sensitivity: </strong> With the wedding date
                                            approaching, the couple required a quick and efficient loan
                                            approval process.
                                        </li>
                                        <li>
                                            <strong>Credit Score: </strong> Both clients had good credit
                                            scores, but they were keen on finding a lender who would offer
                                            favorable terms based on their financial history.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="portfolio-block">
                                <div className="protfolio-details-two">
                                    <h3>Project Success Key</h3>
                                    <p>
                                        Our wedding loan services were perfectly suited to meet Sarah and
                                        James’s needs. Here’s how we addressed their challenges:
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>Initial Consultation:</strong> Our financial advisor
                                            conducted an initial consultation with Sarah and James
                                        </li>
                                        <li>
                                            <strong>Loan Pre-Approval:</strong> Based on the information
                                            provided, we offered a loan pre-approval with competitive.
                                        </li>
                                        <li>
                                            <strong> Streamlined Application Process:</strong> We provided a
                                            simple and user-friendly online application process
                                        </li>
                                        <li>
                                            <strong>Quick Approval:</strong> Thanks to our efficient
                                            processing system, Sarah and James received loan approval within
                                            48 hours.
                                        </li>
                                        <li>
                                            <strong>Personalized Support: </strong> Throughout the process,
                                            our dedicated customer service team was available
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-block stcky">
                                <ul className="portfolio-details-list">
                                    <li>
                                        <h5>Client:</h5> <span>loardway Company</span>
                                    </li>
                                    <li>
                                        <h5>Date:</h5> <span>17 March, 2023</span>
                                    </li>
                                    <li>
                                        <h5>Category:</h5> <span>Modern</span>
                                    </li>
                                    <li>
                                        <h5>Time:</h5> <span>1 Year</span>
                                    </li>
                                    <li>
                                        <h5>Share:</h5>
                                        <ul className="portfolio-social-media">
                                            <li>
                                                <Link to="https://www.facebook.com/">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://x.com/">
                                                    <i className="fa-brands fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.instagram.com/">
                                                    <i className="fa-brands fa-instagram" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://in.linkedin.com/">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-block mb-0">
                        <div className="single-blog-pagination">
                            <div className="single-blog-pagination-pre">
                                <Link to="#" className="btn-link-two">
                                    <i className="fa-solid fa-arrow-left" />
                                </Link>
                                <h5>
                                    <Link className="single-blog-pagination-link" to="#">
                                        How to Use Business <br /> Loans to Expand Your
                                    </Link>
                                </h5>
                            </div>
                            <div className="single-blog-pagination-next">
                                <h5>
                                    <Link className="single-blog-pagination-link" to="#">
                                        Innovative Financing <br /> Solutions for Startups
                                    </Link>
                                </h5>
                                <Link to="#" className="btn-link-two">
                                    <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {ytshow &&
                <div className="YouTubePopUp-Wrap">
                    <div className="YouTubePopUp-Content">
                        <span className="YouTubePopUp-Close" onClick={() => setytshow(false)} />
                        <iframe
                            src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                            allowFullScreen="allowfullscreen"
                        />
                    </div>
                </div>
            }
        </>
    )
}
export default Details;