import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Whychooseimg01 from '../../../assets/images/shape/why-choose-shape-3.png';
import Whychooseimg02 from '../../../assets/images/shape/why-choose-shape-4.png';
import Whychooseimg03 from '../../../assets/images/why-choose-image.jpg';

const Whychoosetwo = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(
                '.why-choose-two-image'
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
    const whychoosedata = [
        {
            heading: "Transparency & Trust",
            about: "At Loanlift, transparency and trust are the foundation of everything we do. We believe in clear."
        },
        {
            heading: "Experience & Expertise",
            about: "With years of industry experience, Loanlift's team of experts delivers exceptional financial guidance."
        },
        {
            heading: "Competitive Rates",
            about: "we offer competitive rates that help you save more on your loan. Our affordable interest rates are."
        },
    ]
    return (
        <div className="why-choose-two">
            <div className="why-choose-two-shape-1">
                <img src={Whychooseimg01} alt="shape" />
            </div>
            <div className="why-choose-two-shape-2">
                <img src={Whychooseimg02} alt="shape" />
            </div>
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-7 align-self-center">
                        <div className="why-choose-right-two">
                            <div className="heading-box heading-white">
                                <span className="heading-subtitle wow fadeInUp animated animated">
                                    🤝 WHY CHOOSE US
                                </span>
                                <h2 className="heading-title wow fadeInUp animated animated">
                                    Why loanlift is your trusted financial partner
                                </h2>
                            </div>
                            <p>
                                Choosing Loanlift means partnering with a financial expert who puts
                                your needs first. Our commitment to personalized solutions ensures
                                that we tailor every loan to fit your unique circumstances, offering
                                flexibility and transparency at every step. With a team of seasoned
                                professionals and years of industry experience.
                            </p>
                            <ul className="why-choose-two-list">
                                <li>
                                    <i className="flaticon-checked" /> We tailor every loan to fit
                                    your specific financial goals
                                </li>
                                <li>
                                    <i className="flaticon-checked" />
                                    We believe in clear, upfront communication
                                </li>
                                <li>
                                    <i className="flaticon-checked" />
                                    Enjoy access to competitive interest rates
                                </li>
                            </ul>
                            <Link to="/Contactus" className="btn btn-outline-primary">
                                Free Consulting <i className="flaticon-next" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="why-choose-two-image">
                            <img
                                src={Whychooseimg03} alt="why-choose-image"
                            />
                            <div className="image-shape">
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="row gutter-y-30">
                            {whychoosedata.map((data, index) =>
                                <div key={index}
                                    className="col-lg-4" >
                                    <div className="why-choose-two-box">
                                        <i className="flaticon-transparency" />
                                        <div className="why-choose-two-box-info">
                                            <h4>{data.heading}</h4>
                                            <p>
                                                {data.about}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}
export default Whychoosetwo;