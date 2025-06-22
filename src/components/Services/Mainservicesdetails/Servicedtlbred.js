import React from 'react'
import { Link } from 'react-router-dom';
import Servbg from '../../../assets/images/background/services-deatils-bg.jpg';

const Servicedtlbred = () => {
    return (
        <div
            className="inner-page-hero"
            style={{
                backgroundImage: `url(${Servbg})`
            }}
        >
            <div className="container">
                <div className="hero-heading-title">
                    <h2>Make Your Homeownership Dream a Reality</h2>
                </div>
                <ul className="bradcrumb">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Services1">Services </Link>
                    </li>
                    <li>
                        <Link to="#">Mortgage Loans</Link>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Servicedtlbred;