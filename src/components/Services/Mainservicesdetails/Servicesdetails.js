import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Servdtl01 from '../../../assets/images/services/services-details-1.jpg';
import Servdtl02 from '../../../assets/images/favicon-2.png';

const Servicedetails = () => {
    const [activeFAQ, setActiveFAQ] = useState(0)
    const faqs = [
        {
            question: "What documents are required to apply for a loan?",
            answer: "To apply for a home loan, you'll need to provide proof of income, your credit history, and employment verification. Additionally, you'll need to submit recent tax returns and details about your assets and liabilities."
        },
        {
            question: "How recent should my documents be?",
            answer: "Documents should generally be recent, with the most up-to-date tax returns, pay stubs, and bank statements for the best approval process."
        },
        {
            question: "Can I submit digital copies of my documents?",
            answer: "Yes, digital copies of your documents can be submitted online. Ensure they are clear and legible to avoid any delays."
        },
        {
            question: "What should I do if I'm missing some of the required documents?",
            answer: "If you're missing any required documents, please contact us to discuss alternatives and the best course of action for your application."
        }
    ]
    const handleToggle = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    }
    const renderFAQ = (faq, index) => {
        return (
            <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${activeFAQ === index ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => handleToggle(index)}
                        aria-expanded={activeFAQ === index ? 'true' : 'false'}
                    >
                        {index + 1}. {faq.question}
                    </button>
                </h2>
                <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${activeFAQ === index ? 'show' : ''}`}
                    data-bs-parent="#accordionfaq"
                >
                    <div className="accordion-body">
                        <p>{faq.answer}</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="services-details-section">
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-8">
                        <div className="services-block">
                            <div className="services-details-image">
                                <img src={Servdtl01} alt="services-image" />
                            </div>
                        </div>
                        <div className="services-block">
                            <p>
                                Unlock the door to your dream home with our tailored home loan
                                solutions. Enjoy competitive rates, flexible terms, and personalized
                                support every step of the way. Start your homeownership journey with
                                confidence and ease today. Our expert mortgage advisors are
                                dedicated to guiding you through the entire process, from
                                pre-approval to closing. With a variety of loan options including
                                fixed-rate mortgages, adjustable-rate mortgages, FHA loans, and VA
                                loans, we have the perfect solution to fit your unique needs and
                                financial goals.
                            </p>
                        </div>
                        <div className="services-block">
                            <div className="accordion" id="accordionfaq">
                                {faqs.map((faq, index) => renderFAQ(faq, index))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="services-sidebar">
                            <div className="services-block">
                                <div className="category-widget">
                                    <h4>Service Category</h4>
                                    <ul>
                                        <li className="active">
                                            <Link to="#">Home Loan <i className="flaticon-right-arrow" /></Link>
                                        </li>
                                        <li><Link to="#">Wedding Loan <i className="flaticon-right-arrow" /></Link></li>
                                        <li><Link to="#">Mortgage Loan <i className="flaticon-right-arrow" /></Link></li>
                                        <li><Link to="#">Business Loan <i className="flaticon-right-arrow" /></Link></li>
                                        <li><Link to="#">Education loan <i className="flaticon-right-arrow" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="services-block">
                                <h4>Download Brochure</h4>
                                <Link
                                    to="#"
                                    download="banner-three-thumb.jpg"
                                    className="download-pdf"
                                >
                                    <i className="flaticon-pdf" />
                                    Download PDF File <i className="flaticon-downloads" />
                                </Link>
                            </div>
                            <div className="services-block mb-0">
                                <div className="bolg-cta-widget">
                                    <div className="bolg-cta-widget-inner">
                                        <img src={Servdtl02} alt="logo" />
                                        <h3>Advisory Specialists Premier Loan</h3>
                                        <p className="lead">
                                            <Link to="tel:+020-098-45611">
                                                <i className="flaticon-phone" /> +020-098-456 11
                                            </Link>
                                        </p>
                                        <Link to="/Contactus" className="btn btn-primary">
                                            Get Started <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicedetails;
