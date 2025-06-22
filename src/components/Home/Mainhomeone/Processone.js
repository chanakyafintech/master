import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Process01 from '../../../assets/images/process-video-thamb.jpg';
import Process02 from '../../../assets/images/process-image.jpg';

const Processone = () => {
    const [ytshow, setytshow] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(
                '.process-one-image'
            );

            elements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const elementBottom = el.getBoundingClientRect().bottom;
                const viewportTop = 0;
                const viewportBottom = window.innerHeight;

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    el.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <section className="process-one">
                <div className="container">
                    <div className="row gutter-y-30">
                        <div className="col-lg-6">
                            <div className="heading-box">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    🤝 OUR PROCESS
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Consultation successful loan approval process
                                </h2>
                                <p className="heading-details">
                                    Our comprehensive process ensures a seamless journey from initial
                                    consultation to successful loan approval. Experience personalized
                                    guidance and expert support every step of the way.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="process-one-video">
                                <img src={Process01} alt="video-thumb" />
                                <Link
                                    to="#"
                                    className="process-one-video-btn" onClick={() => setytshow(true)}
                                >
                                    <i className="fa-solid fa-play" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4">
                            <div className="process-one-image">
                                <img src={Process02} alt="process-image" />
                            </div>
                        </div>
                        <div className="col-xl-9 col-md-8 align-self-center">
                            <div
                                className="process-item-one wow fadeInRight animated animated"
                                data-wow-delay="500ms"
                                data-wow-duration="2000ms"
                            >
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-application" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Application</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            Start by filling out our easy online application form. Provide
                                            basic information about yourself and your financial needs.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-contract" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Documentation</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            Upon approval, you'll receive clear instructions on the required
                                            documentation. this may include income verification.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-approval" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Approval</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            Once your application is reviewed, we aim to provide swift
                                            approval decisions. Our goal is to get you approved.
                                        </p>
                                    </div>
                                </div>
                                <div className="process-one-box">
                                    <div className="process-one-box-icon">
                                        <i className="flaticon-money-1" />
                                    </div>
                                    <div className="process-one-box-title">
                                        <h3>Funding</h3>
                                    </div>
                                    <div className="process-one-box-devider" />
                                    <div className="process-one-box-details">
                                        <p>
                                            After your documentation is verified and finalized, we initiate
                                            the funding process. Funds are typically deposited.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
export default Processone;