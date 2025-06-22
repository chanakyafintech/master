import React from "react";
import { Link } from "react-router-dom";
import Careersimg from '../../assets/images/background/apply-now-bg.jpg';

const CareersBred  = ({Title,Subtitle}) =>{
    return (
        <div
            className="inner-page-hero"
            style={{ backgroundImage: `url(${Careersimg})` }}
        >
            <div className="container">
                <div className="hero-heading-title">
                    <h2>{Title}</h2>
                </div>
                <ul className="bradcrumb">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Page </Link>
                    </li>
                    <li>
                        <Link to="#">{Subtitle}</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default CareersBred;