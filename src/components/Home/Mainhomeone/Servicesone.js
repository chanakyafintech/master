import React from 'react'
import { Link } from 'react-router-dom';
import Shape01 from "../../../assets/images/shape/service-shape-1.png";
import Shape00 from '../../../assets/images/shape/service-shape-2.png';
import Shape02 from '../../../assets/images/services/services-1.png';
import Shape03 from '../../../assets/images/services/services-2.png';
import Shape04 from '../../../assets/images/services/services-3.png';
import Shape05 from '../../../assets/images/services/services-4.png';
import Shape06 from '../../../assets/images/services/services-5.png';
import Shape07 from '../../../assets/images/services/services-6.png';

const Servicedata = [
    {
        Image: Shape02,
        heading: "Personal Loans",
        content: "Our Personal Loans offer flexible terms and competitive rates, tailored to meet your individual needs."
    },
    {
        Image: Shape03,
        heading: "Emergency Loans",
        content: "Quick and reliable emergency loans, providing fast access to funds when you need them most. Apply now for instant relief."
    },
    {
        Image: Shape04,
        heading: "Business Loans",
        content: "Empower your business with our flexible financing options. Tailored to meet the unique needs of your enterprise.",
    },
    {
        Image: Shape05,
        heading: "Student Loans",
        content: "Student loans open doors to education but can also become a heavy financial burden if not managed wisely. Plan carefully."
    },
    {
        Image: Shape06,
        heading: "Mortgage Loans",
        content: "Secure your dream home with our competitive mortgage loans. Enjoy flexible terms, low interest rates"
    },
    {
        Image: Shape07,
        heading: "Small Business Loans",
        content: "This content highlights the key benefits of your small business loan offerings, appealing to entrepreneurs seeking financial support."
    },
]
const Servicesone = () => {
    return (
        <section className="services-section-one">
            <div className="service-one-shape-1">
                <img src={Shape01} alt="shape" />
            </div>
            <div className="service-one-shape-2">
                <img src={Shape00} alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 OUR SERVICES
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                Comprehensive financial solutions tailored to your needs
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="service-one-inner">
                    {Servicedata.map((data, index) =>
                        <div key={index}
                            className="service-one-box">
                            <div className="service-one-box-image">
                                <img
                                    src={data.Image} alt="service images"
                                />
                            </div>
                            <div className="service-one-icon-box">
                                <i className="flaticon-personal" />
                            </div>
                            <div className="service-one-info">
                                <h4>{data.heading}</h4>
                                <p>
                                    {data.content}
                                </p>
                            </div>
                            <Link to="/Servicesdetails" className="read-more-btn">
                                <i className="flaticon-next" />
                            </Link>
                        </div>
                    )}
                </div>
                <div className="text-center">
                    <Link to="/Services1" className="btn btn-secondary">
                        View More
                        <i className="flaticon-next" />
                    </Link>
                </div>
            </div>
        </section>

    )
}
export default Servicesone;