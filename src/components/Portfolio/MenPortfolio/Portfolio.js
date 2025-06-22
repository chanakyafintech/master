import React, { useState } from "react";
import { Link } from "react-router-dom";
import Portimg01 from '../../../assets/images/protfolio/protfolio-image-1.jpg';
import Portimg02 from '../../../assets/images/protfolio/protfolio-image-5.jpg';
import Portimg03 from '../../../assets/images/case/case-study-two-1.jpg';
import Portimg04 from '../../../assets/images/protfolio/protfolio-image-2.jpg';
import Portimg05 from '../../../assets/images/protfolio/protfolio-image-4.jpg';
import Portimg06 from '../../../assets/images/protfolio/protfolio-image-3.jpg';
const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("all");

    const portfolioData = {
        all: [
            {
                image: Portimg01,
                category: "Home Loan",
                title: "Seamless Homeownership",
                client: "Technology Solutions"
            },
            {
                image: Portimg02,
                category: "Home Loan",
                title: "Boosting Businesses",
                client: "Centric Lending"
            },
            {
                image: Portimg03,
                category: "Business Loan",
                title: "Transforming Startups: Shaping the Future of Innovation",
                client: "Debt Restructuring"
            },
            {
                image: Portimg04,
                category: "Personal Loan",
                title: "Empowering Education",
                client: "Streamlined Application"
            },
            {
                image: Portimg05,
                category: "Personal Loan",
                title: "Medical Support",
                client: "Quick Solutions"
            },
            {
                image: Portimg06,
                category: "Student Loan",
                title: "Mortgage Made Easy",
                client: "Technology Solutions"
            },
        ],
        home: [
            {
                image: Portimg01,
                category: "Home Loan",
                title: "Seamless Homeownership",
                client: "Technology Solutions"
            },
            {
                image: Portimg02,
                category: "Home Loan",
                title: "Boosting Businesses",
                client: "Centric Lending"
            },
        ],
        business: [
            {
                image: Portimg03,
                category: "Business Loan",
                title: "Transforming Startups: Shaping the Future of Innovation",
                client: "Debt Restructuring"
            },
        ],
        personal: [
            {
                image: Portimg04,
                category: "Personal Loan",
                title: "Empowering Education",
                client: "Streamlined Application"
            },
            {
                image: Portimg05,
                category: "Personal Loan",
                title: "Medical Support",
                client: "Quick Solutions"
            },
        ],
        student: [
            {
                image: Portimg06,
                category: "Student Loan",
                title: "Mortgage Made Easy",
                client: "Technology Solutions"
            },
        ],
    };
    return (
        <div className="portfolio-section standrad">
            <div className="container">
                <div className="heading-box text-center">
                    <span className="heading-subtitle">🤝 PORTFOLIO</span>
                    <h2 className="heading-title">Discover our standout projects and dynamic client collaborations.</h2>
                </div>
                <div className="portfolio-tabs">
                    <div className="portfolio-tab-links">
                        <button
                            className={`portfolio-tab-link ${activeTab === "all" ? "active" : ""}`}
                            onClick={() => setActiveTab("all")}
                        >
                            All <span className="item-count">{portfolioData.all.length}</span>
                        </button>
                        <button
                            className={`portfolio-tab-link ${activeTab === "home" ? "active" : ""}`}
                            onClick={() => setActiveTab("home")}
                        >
                            Home Loan <span className="item-count">{portfolioData.home.length}</span>
                        </button>
                        <button
                            className={`portfolio-tab-link ${activeTab === "business" ? "active" : ""}`}
                            onClick={() => setActiveTab("business")}
                        >
                            Business Loan <span className="item-count">{portfolioData.business.length}</span>
                        </button>
                        <button
                            className={`portfolio-tab-link ${activeTab === "personal" ? "active" : ""}`}
                            onClick={() => setActiveTab("personal")}
                        >
                            Personal Loan <span className="item-count">{portfolioData.personal.length}</span>
                        </button>
                        <button
                            className={`portfolio-tab-link ${activeTab === "student" ? "active" : ""}`}
                            onClick={() => setActiveTab("student")}
                        >
                            Student Loan <span className="item-count">{portfolioData.student.length}</span>
                        </button>
                    </div>
                    <div
                        className={`portfolio-tab-content ${activeTab === "all" ? "active" : ""}`}
                    >
                        <div className="row gutter-y-40 gutter-x-15">
                            {portfolioData.all.map((item, index) =>
                                <div key={index} className="col-lg-6 col-md-12 portfolio-item">
                                    <Link to="/Portfoliodetails" className="portfolio-one-item-inner">
                                        <div className="portfolio-one-item-image">
                                            <img src={item.image} alt="portfolio" />
                                        </div>
                                        <div className="portfolio-one-details">
                                            <h5 className="portfolio-one-tagline">{item.category}</h5>
                                            <h4>{item.title}</h4>
                                            <div className="portfolio-one-category">
                                                <p>Client name : {item.client}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    {Object.keys(portfolioData).map((tab) => (
                        tab !== "all" && (
                            <div
                                key={tab}
                                className={`portfolio-tab-content ${activeTab === tab ? "active" : ""}`}
                            >
                                <div className="row gutter-y-40 gutter-x-15">
                                    {portfolioData[tab].map((item, index) => (
                                        <div key={index} className="col-lg-6 col-md-12 portfolio-item">
                                            <Link to="/Portfoliodetails" className="portfolio-one-item-inner">
                                                <div className="portfolio-one-item-image">
                                                    <img src={item.image} alt="portfolio" />
                                                </div>
                                                <div className="portfolio-one-details">
                                                    <h5 className="portfolio-one-tagline">{item.category}</h5>
                                                    <h4>{item.title}</h4>
                                                    <div className="portfolio-one-category">
                                                        <p>Client name : {item.client}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;