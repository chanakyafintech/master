import React from 'react'
import { Link } from 'react-router-dom';
import Serviceimage01 from '../../../assets/images/shape/services-three-shape-1.png';
import Serviceimage02 from '../../../assets/images/shape/services-three-shape-2.png';

const Servicesdata = [
    {
        no: "01",
        title: "Personal Loans",
        content: "Personal loans offer flexible funding for various needs, from consolidating debt to covering unexpected expenses."
    },
    {
        no: "02",
        title: "Business Loans",
        content: "Business loans provide essential funding to grow your enterprise, manage cash flow, or invest in new opportunities."
    },
    {
        no: "03",
        title: "Mortgage Loans",
        content: "Mortgage loans provide financing needed to purchase a home, offering competitive rates & flexible repayment terms."
    },
    {
        no: "04",
        title: "Emergency Loans",
        content: "Emergency loans provide quick, essential funding to cover unexpected expenses, ensuring financial stability during crises."
    },
    {
        no: "05",
        title: "Student Loans",
        content: "Student loans can help you achieve educational goals but plan carefully to manage repayment effectively."
    },
    {
        no: "06",
        title: "Small Business Loans",
        content: "Personal loans offer flexible funding for various needs, from consolidating debt to covering unexpected expenses."
    },
]
const Servicesthree = () => {
    return (
        <div className="services-three">
            <div className="services-three-shape-one-1">
                <img src={Serviceimage01} alt="shape" />
            </div>
            <div className="services-three-shape-one-2">
                <img src={Serviceimage02} alt="shape" />
            </div>
            <div className="container">
                <div className="heading-box text-center">
                    <span className="heading-subtitle wow fadeInUp animated animated">
                        🤝 OUR SERVICES
                    </span>
                    <h2 className="heading-title wow fadeInUp animated animated">
                        Explore our comprehensive services
                    </h2>
                </div>
                <div className="row gutter-y-40">
                    {Servicesdata.map((data, index) =>
                        <div key={index}
                            className="col-xl-4 col-md-6">
                            <div className="services-three-box">
                                <div className="services-three-box-icon">
                                    <i className="flaticon-personal" />
                                </div>
                                <hr />
                                <span>{data.no}</span>
                                <div className="services-three-box-title">
                                    <h3>{data.title}</h3>
                                </div>
                                <div className="services-three-box-info">
                                    <p>
                                        {data.content}
                                    </p>
                                </div>
                                <Link to="/Servicesdetails" className="btn-link">
                                    Read More <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Servicesthree;