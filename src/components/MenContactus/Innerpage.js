import React from "react";
import { Link } from "react-router-dom";
import Bgimg from '../../assets/images/background/contact-bg.jpg';

const Innerpage = () => {
    return (
        <>
            <div
                className="inner-page-hero"
                style={{ backgroundImage: `url(${Bgimg})` }}
            >
                <div className="container">
                    <div className="hero-heading-title">
                        <h2>Contact</h2>
                    </div>
                    <ul className="bradcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="#">Page</Link>
                        </li>
                        <li>
                            <Link to="#">Contacts Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Innerpage;