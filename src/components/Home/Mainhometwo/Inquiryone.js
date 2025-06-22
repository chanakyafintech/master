import React from 'react'
import Inqimg01 from '../../../assets/images/shape/inquiry-shape-1.png';
import Inqimg02 from '../../../assets/images/Maps.png';

const Inquiryone = () => {
    return (
        <section className="inquiry-one">
            <div className="inquiry-shape-one-1">
                <img src={Inqimg01} alt="shape" />
            </div>
            <div className="container">
                <div className="heading-box">
                    <h2 className="heading-title wow fadeInUp animated animated">
                        We're here to assist with all your loan needs &amp; questions
                    </h2>
                </div>
                <div className="row gutter-y-30">
                    <div className="col-xl-7 col-lg-7">
                        <div className="inquiry-form-one">
                            <form action="#">
                                <div className="inquiry-form-group-one">
                                    <div className="inquiry-form-group-one-inner">
                                        <label>
                                            <i className="fa-regular fa-user" />
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>
                                    <div className="inquiry-form-group-one-inner">
                                        <label>
                                            <i className="fa-regular fa-envelope" />
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="inquiry-form-group-one">
                                    <div className="inquiry-form-group-one-inner">
                                        <label>
                                            <i className="fa-solid fa-phone" />
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Phon Number"
                                            required=""
                                        />
                                    </div>
                                    <div className="inquiry-form-group-one-inner">
                                        <label>
                                            <i className="fa-solid fa-list" />
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="inquiry-form-group-one">
                                    <label>
                                        <i className="fa-solid fa-message" />
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="form-control"
                                        placeholder="About your requirement"
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="submit" className="btn btn-secondary">
                                    Inquiry Now <i className="flaticon-next" />
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 align-self-center">
                        <div className="inquiry-image-one">
                            <img src={Inqimg02} alt="map-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Inquiryone;