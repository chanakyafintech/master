import React, { useState } from "react";
import Timg01 from '../../../assets/images/faq-image.jpg';
import { Link } from "react-router-dom";

const Teamdetail = () => {
    const [activeIndex, setActiveIndex] = useState("0-0");
    const faqData = [
        {
            title: 'Home Loan',
            items: [
                {
                    question: 'What documents are required to apply for a loan?',
                    answer: "To apply for a home loan, you'll need to provide proof of income, your credit history, and employment verification...",
                },
                {
                    question: 'How recent should my documents be?',
                    answer: "Documents should be as recent as possible, ideally within the last three months...",
                },
                {
                    question: 'Can I submit digital copies of my documents?',
                    answer: "Yes, you can submit digital copies, but make sure they are clear and legible...",
                },
            ]
        },
        {
            title: 'Mortgage Loan',
            items: [
                {
                    question: 'What is the fixed-rate and an adjustable-rate mortgage?',
                    answer: "A fixed-rate mortgage has an interest rate that stays the same, while an adjustable-rate mortgage (ARM) has a rate that may change...",
                },
                {
                    question: 'What is the difference between a fixed-rate and adjustable-rate mortgage?',
                    answer: "The difference is in how the interest rate behaves. Fixed-rate mortgages offer predictability...",
                },
            ]
        },
        {
            title: 'Personal Loan',
            items: [
                {
                    question: 'What is a personal loan?',
                    answer:"A personal loan is a type of unsecured loan that you can use for any personal purpose...",
                },
                {
                    question: 'How do I qualify for a personal loan?',
                    answer: "You'll typically need a good credit score, stable income, and low debt-to-income ratio...",
                },
            ]
        },
        {
            title: 'Student Loan',
            items: [
                {
                    question: 'How do I apply for a student loan?',
                    answer:"To apply for a student loan, you'll need to submit your school information and financial details...",
                },
                {
                    question: 'Do I need a cosigner for a student loan?',
                    answer: "A cosigner may be required if you don't have a credit history or need to meet certain eligibility requirements...",
                },
            ]
        },
    ]
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="faq-section">
            <div className="container">
                <div className="row gutter-y-30 gutter-x-15">
                    <div className="col-lg-8">
                        <div className="accordion" id="accordionfaq">
                            {faqData.map((faq, faqIndex) => (
                                <div key={faqIndex} className="fqa-block">
                                    <h4>{faq.title}</h4>
                                    {faq.items.map((item, index) => {
                                        const combinedIndex = `${faqIndex}-${index}`;

                                        return (
                                            <div key={combinedIndex} className="accordion-item">
                                                <h2 className="accordion-header">
                                                    <button
                                                        className={`accordion-button ${activeIndex === combinedIndex ? '' : 'collapsed'}`}
                                                        type="button"
                                                        onClick={() => handleToggle(combinedIndex)}
                                                        aria-expanded={activeIndex === combinedIndex}
                                                    >
                                                        {index + 1}. {item.question}
                                                    </button>
                                                </h2>
                                                {activeIndex === combinedIndex && (
                                                    <div className="accordion-collapse show">
                                                        <div className="accordion-body">
                                                            <p>{item.answer}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="fqa-block stcky">
                            <div className="faq-right">
                                <div className="faq-right-inner">
                                    <h4>Still have questions? Feel free to ask us!</h4>
                                    <p>Contact us directly, drop us an email!</p>
                                    <img src={Timg01} alt="fqa-image" />
                                    <div className="faq-details">
                                        <p>We'd love to hear from you! Whether you have questions, need assistance, or want to learn more about our services, feel free to reach out to us anytime.</p>
                                    </div>
                                    <Link to="/Contactus" className="btn btn-primary">
                                        Contact Us <i className="flaticon-next" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teamdetail;