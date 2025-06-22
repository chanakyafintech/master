import React from "react";
import { Link } from "react-router-dom";
import Portfoliobg from '../../assets/images/background/protfolio-bg.jpg';

const Portfoliobred = ({Title,Subtitle}) => {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{ backgroundImage: `url(${Portfoliobg})` }}
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
                            <Link to="#">{Subtitle}</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Portfoliobred;