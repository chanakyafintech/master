import React from "react";
import Contactimg01 from '../../assets/images/contact-us/englend-flag.jpg';
import Contactimg02 from '../../assets/images/contact-us/canada-flag.jpg';
import Contactimg03 from '../../assets/images/contact-us/usa-flag.jpg';
import Contactimg04 from '../../assets/images/contact-us/englend-flag.jpg';
import Contactimg05 from '../../assets/images/Maps.png';

const Aboutthree = () => {
    return (
        <>
            <div className="contact-section">
                <div className="container">
                    <div className="heading-box text-center">
                        <span className="heading-subtitle wow fadeInUp animated animated">
                            🤝 CONTACT US
                        </span>
                        <h2 className="heading-title wow fadeInUp animated animated">
                            Our Headquarters Location
                        </h2>
                    </div>
                    <div className="row gutter-y-30 align-items-center">
                        <div className="col-lg-6">
                            <div className="row gutter-y-30">
                                <div className="col-md-6">
                                    <div className="contact-location">
                                        <img
                                            src={Contactimg01}
                                            alt="Country-flag"
                                        />
                                        <h5>North Leighaport</h5>
                                    </div>
                                    <p>Suite 794 49823 Glover Fields, North Leighaport, MO</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-location">
                                        <img
                                            src={Contactimg02}
                                            alt="Country-flag"
                                        />
                                        <h5>Canada</h5>
                                    </div>
                                    <p>Apt. 228 9976 Lesch Meadows, Yerview, RI 49061-3911</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-location">
                                        <img
                                            src={Contactimg03}
                                            alt="Country-flag"
                                        />
                                        <h5>Schroederland</h5>
                                    </div>
                                    <p>13th Street, 47 W 13th St, New York, NY 10011, USA</p>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact-location">
                                        <img
                                            src={Contactimg04}
                                            alt="Country-flag"
                                        />
                                        <h5>New Zealand</h5>
                                    </div>
                                    <p>32729 White Canyon, Lake Cornellhaven, AL 19490-6873</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="map-image">
                                <img src={Contactimg05} alt="map-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Aboutthree;