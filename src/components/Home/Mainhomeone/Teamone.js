import React from 'react'
import Team01 from '../../../assets/images/shape/team-shape-2.png';
import Team02 from '../../../assets/images/shape/team-shape-2.png';
import Team03 from '../../../assets/images/team/team-1.jpg';
import Team04 from '../../../assets/images/team/team-2.jpg';
import Team05 from '../../../assets/images/team/team-3.jpg';
import Team06 from '../../../assets/images/team/team-4.jpg';
import { Link } from 'react-router-dom';

const Teamdata = [
    {
        Image: Team03,
        name: "Joan Johnson",
        position: "Chief Financial Officer"
    },
    {
        Image: Team04,
        name: "Donnie Southern",
        position: "Head Of Operation"
    },
    {
        Image: Team05,
        name: "Alexandra Southern",
        position: "Branch Manager"
    },
    {
        Image: Team06,
        name: "Alexandra Southern",
        position: "Regional Manager"
    },
]
const Teamone = () => {
    return (
        <section className="team-one">
            <div className="team-shape-one-1">
                <img src={Team01} alt="shape" />
            </div>
            <div className="team-shape-one-2">
                <img src={Team02} alt="shape" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 m-auto">
                        <div className="heading-box text-center">
                            <span className="heading-subtitle wow fadeInUp animated animated">
                                🤝 OUR TEAM
                            </span>
                            <h2 className="heading-title wow fadeInUp animated animated">
                                The team driving innovation and excellence in financial services
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gutter-y-30">
                    {Teamdata.map((data, index) =>
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                            <div className="team-one-box">
                                <Link to="/Teamdetails" className="team-one-image">
                                    <img src={data.Image} alt="team-image" />
                                </Link>
                                <div className="team-one-details">
                                    <div className="team-one-details-inner">
                                        <h5>{data.name}</h5>
                                        <p>{data.position}</p>
                                        <div className="team-one-social-media">
                                            <ul>
                                                <li><Link to="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link to="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link to="https://in.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                                <li><Link to="https://x.com/" target="_blank"><i className="fa-brands fa-twitter" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>

    )
}
export default Teamone;