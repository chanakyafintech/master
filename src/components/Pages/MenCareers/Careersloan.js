import React, { useState } from "react";
import { Link } from "react-router-dom";

const Careersloan = () => {
    const [activeTab, setActiveTab] = useState("all");

    const jobData = {
        officer: [
            {
                title: "Loan Officer",
                description: "Help clients navigate their loan options and provide expert guidance throughout the application process.",
                remote: "100% Remote",
                type: "Full Time",
            },
            {
                title: "Compliance Officer",
                description: "Ensure all operations and processes adhere to regulatory standards and internal policies to maintain the integrity of our services.",
                remote: "100% Remote",
                type: "Full Time",
            },
        ],
        analyst: [
            {
                title: "Customer Service Representative",
                description: "Assist customers with inquiries, provide support, and ensure a seamless experience for all loan-related questions.",
                remote: "100% Remote",
                type: "Full Time",
            },
        ],
        manager: [
            {
                title: "Operations Manager",
                description: "Oversee day-to-day operations, ensuring efficiency and effectiveness in loan processing and customer service.",
                remote: "100% Remote",
                type: "Full Time",
            },
        ],
        marketing: [
            {
                title: "Marketing Manager",
                description: "Create and implement marketing strategies to grow Loanlift's brand and attract new customers.",
                remote: "100% Remote",
                type: "Full Time",
            },
        ],
    };

    return (
        <div className="careers-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle">🤝 CAREERS</span>
                            <h2 className="heading-title">Explore Exciting New Career Opportunities at Loanlift</h2>
                        </div>
                    </div>
                </div>

                <div className="careers-tabs">
                    <div className="careers-tab-links">
                        <button
                            className={`careers-tab-link ${activeTab === "all" ? "active" : ""}`}
                            onClick={() => setActiveTab("all")}
                        >
                            All{" "}
                            <span className="count-items">
                                {jobData.officer.length + jobData.analyst.length + jobData.manager.length + jobData.marketing.length}
                            </span>
                        </button>

                        {Object.keys(jobData).map((tab) =>
                            <button
                                key={tab}
                                className={`careers-tab-link ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
                                <span className="count-items">
                                    {jobData[tab].length}
                                </span>
                            </button>
                        )}
                    </div>

                    <div
                        className={`careers-tab-content ${activeTab === "all" ? "active" : ""}`}
                    >
                        {[...jobData.officer, ...jobData.analyst, ...jobData.manager, ...jobData.marketing].map((job, index) => (
                            <div key={index} className="careers-tab-item">
                                <div className="job-title">
                                    <h3>
                                        <Link to="#">{job.title}</Link>
                                    </h3>
                                    <Link to="#" className="btn btn-secondary">
                                        Apply <i className="flaticon-next" />
                                    </Link>
                                </div>
                                <div className="job-details">
                                    <p>{job.description}</p>
                                </div>
                                <div className="job-type">
                                    <div className="job-type-inner">
                                        <i className="flaticon-remote-control" />
                                        <p>{job.remote}</p>
                                    </div>
                                    <div className="job-type-inner">
                                        <i className="flaticon-time" />
                                        <p>{job.type}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {Object.keys(jobData).map((tab) => (
                        <div
                            key={tab}
                            className={`careers-tab-content ${activeTab === tab ? "active" : ""}`}
                        >
                            {jobData[tab].map((job, index) => (
                                <div key={index} className="careers-tab-item">
                                    <div className="job-title">
                                        <h3>
                                            <Link to="#">{job.title}</Link>
                                        </h3>
                                        <Link to="#" className="btn btn-secondary">
                                            Apply <i className="flaticon-next" />
                                        </Link>
                                    </div>
                                    <div className="job-details">
                                        <p>{job.description}</p>
                                    </div>
                                    <div className="job-type">
                                        <div className="job-type-inner">
                                            <i className="flaticon-remote-control" />
                                            <p>{job.remote}</p>
                                        </div>
                                        <div className="job-type-inner">
                                            <i className="flaticon-time" />
                                            <p>{job.type}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careersloan;