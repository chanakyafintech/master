import React from 'react'
import { Link } from 'react-router-dom';

const Servicebred = ({Title,Subtitle}) => {
    return (
        <div className="inner-page-hero">
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

    )
}
export default Servicebred;