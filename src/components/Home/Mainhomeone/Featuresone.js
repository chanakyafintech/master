import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Range } from "react-range";
import Bgimg from '../../../assets/images/background/features-bg-three.jpg';
import Bgimg01 from '../../../assets/images/features-video-thumb.jpg';

const Featuresthree = () => {
    const [ytshow, setytshow] = useState(false);
    const [loanAmount, setLoanAmount] = useState(60000);
    const [loanDuration, setLoanDuration] = useState(6);

    const calculateMonthlyPayment = (amount, months) => {
        const interestRate = 0.15;
        const totalInterest = amount * interestRate;
        const totalPayBack = amount + totalInterest;
        const monthlyPayment = totalPayBack / months;
        return {
            monthlyPayment: monthlyPayment.toFixed(2),
            totalPayBack: totalPayBack.toFixed(2),
        }
    }
    const { monthlyPayment, totalPayBack } = calculateMonthlyPayment(loanAmount, loanDuration);
    return (
        <>
            <div className="features-three features">
                <div className="container">
                    <div className="row gutter-y-30 justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div
                                className="features-box-three"
                                style={{
                                    backgroundImage:
                                        `url(${Bgimg})`
                                }}
                            >
                                <h4>
                                    Get in touch with our team for personalized support and expert
                                    guidance.
                                </h4>
                                <Link to="/MeetTheTeam" className="btn btn-outline-secondary">
                                    Connect To Team <i className="flaticon-next" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div
                                className="features-box-three features-box-three-middel"
                                style={{
                                    backgroundImage: `url(${Bgimg01})`
                                }}
                            >
                                <div className="features-video">
                                    <div className="features-video-info">
                                        <Link
                                            to="#"
                                            className="features-video-btn-one" onClick={() => setytshow(true)}
                                        >
                                            <i className="fa-solid fa-play" />
                                        </Link>
                                        <p>
                                            Click To watch <br /> See How we Work
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-10">
                            <form
                                action="#"
                                id="loan-calculator"
                                data-interest-rate={15}
                                className="features-three-form"
                            >
                                <h3>How Much Do You Need?</h3>
                                <div className="features-three-form-content">
                                    <div className="input-box__top">
                                    <div className="noUi-tooltip">$53000</div>

                                    <div className="noUi-touch-area" />

                                        <span>$10000</span>
                                        <span>$100000</span>
                                    </div>
                                    <Range
                                        step={1000}
                                        min={10000}
                                        max={100000}
                                        values={[loanAmount]}
                                        onChange={(values) => setLoanAmount(values[0])}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: "10px",
                                                    width: "100%",
                                                    backgroundColor: "#f6f6f6",
                                                    borderRadius: "4px",
                                                    position: "relative",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        height: "10px",
                                                        backgroundColor: "black",
                                                        borderRadius: "4px",
                                                        left: "0%",
                                                        width: `${((loanAmount - 10000) / (100000 - 10000)) * 100}%`,
                                                    }}
                                                />
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props, key }) => (
                                            <div key={key} {...props} style={{ ...props.style, height: "20px", width: "20px", backgroundColor: "#808080", borderRadius: "50%" }} />
                                          )}
                                          
                                    />
                                    <div
                                        style={{
                                            textAlign: "center",
                                            marginTop: "10px",
                                            fontSize: "16px",
                                            color: "#000",
                                        }}
                                    >
                                        ${loanAmount}
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            marginTop: "10px",
                                            fontSize: "16px",
                                            color: "#000",
                                        }}
                                    >
                                        <span>1 Month</span>
                                        <span>12 Months</span>
                                    </div>
                                    <Range
                                        step={1}
                                        min={1}
                                        max={12}
                                        values={[loanDuration]}
                                        onChange={(values) => setLoanDuration(values[0])}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: "10px",
                                                    width: "100%",
                                                    backgroundColor: "#f6f6f6",
                                                    borderRadius: "4px",
                                                    position: "relative",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        height: "10px",
                                                        backgroundColor: "black",
                                                        borderRadius: "4px",
                                                        left: "0%",
                                                        width: `${((loanDuration - 1) / (12 - 1)) * 100}%`,
                                                    }}
                                                />
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: "20px",
                                                    width: "20px",
                                                    backgroundColor: "#808080",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                        )}
                                    />
                                    <div
                                        style={{
                                            textAlign: "center",
                                            marginTop: "10px",
                                            fontSize: "16px",
                                            color: "#000",
                                        }}
                                    >
                                        {loanDuration}
                                    </div>
                                    <div className="features-three-pay-back">
                                        <p>
                                            <span>Pay Monthly</span>
                                            <b>
                                                ${monthlyPayment}
                                            </b>
                                        </p>
                                        <p>
                                            <span>Total Pay Back</span>
                                            <b>
                                                ${totalPayBack}
                                            </b>
                                        </p>
                                    </div>
                                    <button type="submit" className="btn btn-outline-secondary">
                                        Apply For Loan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {ytshow &&
                <div className="YouTubePopUp-Wrap">
                    <div className="YouTubePopUp-Content">
                        <span className="YouTubePopUp-Close" onClick={() => setytshow(false)} />
                        <iframe
                            src="https://www.youtube.com/embed/rzfmZC3kg3M?autoplay=1"
                            allowFullScreen="allowfullscreen"
                        />
                    </div>
                </div>
            }
        </>
    )
}
export default Featuresthree;