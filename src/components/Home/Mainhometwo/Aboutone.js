import React, { useEffect } from "react";
import Abtimg01 from '../../../assets/images/shape/about-shape-1.png';
import Abtimg02 from '../../../assets/images/shape/about-shape-2.png';
import Abtimg03 from '../../../assets/images/about/about-image.jpg';
import Abtimg04 from '../../../assets/images/about/about-image-2.jpg';

const Aboutone = () => {


    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(
                '.about-one-image',
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
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(
                '.about-one_image'
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
    }, []);
    return (
        <div className="about-one">
            <div className="about-one-shape-1">
                <img src={Abtimg01} alt="shape" />
            </div>
            <div className="about-one-shape-2">
                <img src={Abtimg02} alt="shape" />
            </div>
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-xl-9 col-lg-8">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 ABOUT US
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Discover our reliable and empowering loan solutions.
                            </h2>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-xl-5 col-lg-12">
                                <div className="about-one-image">
                                    <img
                                        src={Abtimg03}
                                        alt="about-image"
                                    />
                                    <div className="image-shape">
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-12">
                                <div className="about-one-info">
                                    <div className="section-details">
                                        <p>
                                            We are committed to delivering tailored financial solutions
                                            designed to fit your unique needs. We take the time to listen
                                            and assess your financial goals to provide customized lending
                                            options.
                                        </p>
                                        <p>
                                            We are dedicated to offering personalized financial services crafted to align with your individual goals. By carefully understanding your financial aspirations, we provide bespoke lending options tailored specifically for you.</p>
                                        <p>Our commitment lies in providing tailor-made financial solutions that cater to your specific needs. We take the time to understand and evaluate your financial objectives, ensuring that we offer customized lending options that align with your unique goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 d-lg-block d-none">
                        <div className="about-one_image">
                            <img src={Abtimg04} alt="about-image" />
                            <div className="image-shape">
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Aboutone;