import React, {useEffect} from 'react'
import Abouttwoimg01 from '../../../assets/images/about/about-two-image.jpg';
import Abouttwoimg02 from '../../../assets/images/Team.png';
import Abouttwoimg03 from '../../../assets/images/Team-icon.svg';
import Abouttwoimg04 from '../../../assets/images/accounting.svg';
import Abouttwoimg05 from '../../../assets/images/contract.svg';

const Abouttwo = () => {
    useEffect(() => {
                    const handleScroll = () => {
                      const elements = document.querySelectorAll(
                        '.about-two-image'
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
        <div className="about-two">
            <div className="container">
                <div className="row gutter-y-60">
                    <div className="col-lg-6 col-md-12 about-two-left">
                        <div className="about-two-image">
                            <img
                                src={Abouttwoimg01}
                                alt="about-image"
                            />
                            <div className="image-shape">
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className="about-two-cta-box">
                            <div className="client-list">
                                <img src={Abouttwoimg02} alt="team" />
                            </div>
                            <div className="about-two-info-right">
                                <h5>Our Expert Team</h5>
                                <p className="mb-0">
                                    A global customer refers to an individual or business entity that
                                    operates.
                                </p>
                            </div>
                            <div className="about-two-cta-box-icon">
                                <img width={50} src={Abouttwoimg03} alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-two-right">
                        <div className="heading-box">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 ABOUT US
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Our loans will fill your dreams come true
                            </h2>
                            <p className="heading-details">
                                At Loanlift, we are committed to delivering tailored financial
                                solutions designed to fit your individual needs. At Loanlift, we are
                                committed to delivering.
                            </p>
                        </div>
                        <ul className="about-two-list">
                            <li>
                                <i className="flaticon-checked" /> Translating the design into code
                                using{" "}
                            </li>
                            <li>
                                <i className="flaticon-checked" /> Responsive and functions
                                perfectly across all devices
                            </li>
                        </ul>
                        <div className="row gutter-y-30">
                            <div className="col-xl-6 col-lg-12">
                                <div className="about-two-box">
                                    <div className="about-two-box-icon">
                                        <img src={Abouttwoimg04} alt="icon" />
                                    </div>
                                    <div className="about-two-box-title">
                                        <h4>Competitive Interest Rates</h4>
                                    </div>
                                    <div className="about-two-box-info">
                                        <p>
                                            we offer some of the most competitive interest rates in the
                                            industry, ensuring you get the best value for your loan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div className="about-two-box">
                                    <div className="about-two-box-icon">
                                        <img src={Abouttwoimg05} alt="icon" />
                                    </div>
                                    <div className="about-two-box-title">
                                        <h4>Expert Guidance Every Step</h4>
                                    </div>
                                    <div className="about-two-box-info">
                                        <p>
                                            we offer expert guidance at every step of your loan journey.
                                            Our experienced team.
                                        </p>
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
export default Abouttwo;