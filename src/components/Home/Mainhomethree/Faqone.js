import React, { useState } from 'react';

const Faqone = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const faqData = [
        {
            question: 'What documents are required to apply for a loan?',
            answer:
                "To apply for a home loan, you'll need to provide proof of income, your credit history, and employment verification. Additionally, you'll need to submit recent tax returns and details about your assets and liabilities.",
        },
        {
            question: 'How recent should my documents be?',
            answer:
                "Documents like bank statements, pay slips, and tax returns should be from the last 3-6 months to ensure they are current and valid.",
        },
        {
            question: 'Can I submit digital copies of my documents?',
            answer:
                "Yes, digital copies are accepted as long as they are clear and legible. Make sure to provide scanned copies in PDF or JPEG format.",
        },
        {
            question: "What should I do if I'm missing some of the required documents?",
            answer:
                "Contact our support team to discuss alternatives. We may accept supplementary documents or guide you on how to obtain the missing records."
        },
    ];
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-one">
            <div className="container">
                <div className="row gutter-y-40 justify-content-center">
                    <div className="col-xl-10">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated">
                                🤝 FAQS
                            </span>
                            <h2 className="heading-title wow fadeInUp animated">
                                Document guideline FAQ for home loan
                            </h2>
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="accordion">
                            {faqData.map((faq, index) => (
                                <div key={index} 
                                className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'
                                                }`}
                                            type="button"
                                            onClick={() => handleToggle(index)}
                                            aria-expanded={activeIndex === index}
                                        >
                                            {index + 1}. {faq.question}
                                        </button>
                                    </h2>
                                    {activeIndex === index && (
                                        <div className="accordion-collapse show">
                                            <div className="accordion-body">
                                                <p>{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqone;