import React, { useEffect, useState } from 'react';
import Processimg01 from '../../../assets/images/case-study/case-study-8.jpg';
import Processimg02 from '../../../assets/images/case-study/case-study-5.jpg';
import Processimg03 from '../../../assets/images/case-study/case-study-6.jpg';
import Processimg04 from '../../../assets/images/case-study/case-study-7.jpg';
import Processimg05 from '../../../assets/images/Application.svg';
import Processimg06 from '../../../assets/images/Documentation.svg';
import Processimg07 from '../../../assets/images/Approval.svg';
import Processimg08 from '../../../assets/images/funding.svg';

const Processsecond = () => {
    const [currentVisible, setCurrentVisible] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            let visible = null;
            const processSections = document.querySelectorAll('.process-secound-info');
            processSections.forEach(section => {
                const offsetTop = section.offsetTop;
                if (window.scrollY + 600 >= offsetTop) {
                    visible = section.getAttribute('data-first');
                }
            });
            setCurrentVisible(visible);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className="process-secound-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 m-auto">
                        <div className="heading-box text-center heading-white">
                            <span className="heading-subtitle">🤝 OUR PROCESS</span>
                            <h2 className="heading-title">Initial consultation successful loan approval process</h2>
                        </div>
                    </div>
                </div>
                <div className="row flex-column-reverse flex-lg-row">
                    <div className="col-xl-6 col-lg-7">
                        <div className="process-secound-info" data-first="first">
                            <h2>01</h2>
                            <div className="process-secound-hedding">
                                <h4>Application</h4>
                            </div>
                            <ul className="why-choose-two-list">
                                <li><i className="flaticon-checked" /> Apply quickly with minimal paperwork needed.</li>
                                <li><i className="flaticon-checked" /> Choose loans designed for your needs.</li>
                                <li><i className="flaticon-checked" /> Get funds swiftly with quick processing.</li>
                            </ul>
                        </div>
                        <div className="process-secound-info" data-first="secound">
                            <h2>02</h2>
                            <div className="process-secound-hedding">
                                <h4>Documentation</h4>
                            </div>
                            <ul className="why-choose-two-list">
                                <li><i className="flaticon-checked" /> Submit necessary paperwork for loan processing.</li>
                                <li><i className="flaticon-checked" /> Upload documents through our platform.</li>
                                <li><i className="flaticon-checked" /> Track your application status in real-time.</li>
                            </ul>
                        </div>
                        <div className="process-secound-info" data-first="three">
                            <h2>03</h2>
                            <div className="process-secound-hedding">
                                <h4>Approval</h4>
                            </div>
                            <ul className="why-choose-two-list">
                                <li><i className="flaticon-checked" /> Fast tracking of your loan application process.</li>
                                <li><i className="flaticon-checked" /> Understand requirements for approval decisions.</li>
                                <li><i className="flaticon-checked" /> Assistance in your approval journey guaranteed.</li>
                            </ul>
                        </div>
                        <div className="process-secound-info" data-first="four">
                            <h2>04</h2>
                            <div className="process-secound-hedding">
                                <h4>Funding</h4>
                            </div>
                            <ul className="why-choose-two-list">
                                <li><i className="flaticon-checked" /> Receive funds swiftly to meet needs.</li>
                                <li><i className="flaticon-checked" /> Choose repayment plans that suit you.</li>
                                <li><i className="flaticon-checked" /> Enjoy low-interest rates for your loans.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5 position-relative">
                        <div className="process-secound-sticy">
                            <div className="process-secound-image">
                                <img
                                    className="first"
                                    src={Processimg01}
                                    alt="process-image"
                                    style={{ opacity: currentVisible === "first" ? 1 : 0 }}
                                />
                                <img
                                    className="secound"
                                    src={Processimg02}
                                    alt="process-image"
                                    style={{ opacity: currentVisible === "secound" ? 1 : 0 }}
                                />
                                <img
                                    className="three"
                                    src={Processimg03}
                                    alt="process-image"
                                    style={{ opacity: currentVisible === "three" ? 1 : 0 }}
                                />
                                <img
                                    className="four"
                                    src={Processimg04}
                                    alt="process-image"
                                    style={{ opacity: currentVisible === "four" ? 1 : 0 }}
                                />
                                <div className="image-shape">
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <div
                                className={`process-secound-box first`}
                                style={{ opacity: currentVisible === "first" ? 1 : 0, zIndex: currentVisible === "first" ? 1 : 0 }}
                            >
                                <div className="process-secound-icon">
                                    <img src={Processimg05} alt="process-icon" />
                                </div>
                                <div className="process-secound-box-details">
                                    <p>We’ve made the application process simple and user-friendly to ensure you can access the funding you need quickly and efficiently.</p>
                                </div>
                            </div>
                            <div
                                className={`process-secound-box secound`}
                                style={{ opacity: currentVisible === "secound" ? 1 : 0, zIndex: currentVisible === "secound" ? 1 : 0 }}
                            >
                                <div className="process-secound-icon">
                                    <img src={Processimg06} alt="process-icon" />
                                </div>
                                <div className="process-secound-box-details">
                                    <p>We prioritize transparency and clarity in our operations. Our documentation ensures that you have all the information you need to make informed decisions.</p>
                                </div>
                            </div>
                            <div
                                className={`process-secound-box three`}
                                style={{ opacity: currentVisible === "three" ? 1 : 0, zIndex: currentVisible === "three" ? 1 : 0 }}
                            >
                                <div className="process-secound-icon">
                                    <img src={Processimg07} alt="process-icon" />
                                </div>
                                <div className="process-secound-box-details">
                                    <p>We pride ourselves on a straightforward and efficient approval process that puts your business needs first.</p>
                                </div>
                            </div>
                            <div
                                className={`process-secound-box four`}
                                style={{ opacity: currentVisible === "four" ? 1 : 0, zIndex: currentVisible === "four" ? 1 : 0 }}
                            >
                                <div className="process-secound-icon">
                                    <img src={Processimg08} alt="process-icon" />
                                </div>
                                <div className="process-secound-box-details">
                                    <p>We specialize in providing tailored funding solutions that empower businesses to reach their full potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Processsecond;
