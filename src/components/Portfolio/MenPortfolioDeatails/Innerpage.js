import React from "react";
import { Link } from "react-router-dom";
import Bgimg from '../../../assets/images/background/portfolio-details-bg.jpg';

const Innerpage = () => {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{
                    backgroundImage: `url(${Bgimg})`
                }}
            >
                <div className="container">
                    <div className="hero-heading-title">
                        <h2>Simplified Wedding Loan Process</h2>
                    </div>
                    <ul className="bradcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Portfolio">Portfolio </Link>
                        </li>
                        <li>
                            <Link to="#">Simplified Wedding loan Process</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default Innerpage;