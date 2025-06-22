import React, { useState } from "react";
import Feat01 from "../../../assets/images/features-1.jpg";
import { Link } from "react-router-dom";
import { Range } from "react-range";

const Featuresone = () => {
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
    };
  };

  const { monthlyPayment, totalPayBack } = calculateMonthlyPayment(
    loanAmount,
    loanDuration
  );

  return (
    <section className="features-section-one">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center justify-content-xl-start">
          <div className="col-xxl-3 col-xl-3 col-md-5 col-sm-7">
            <div className="features-one-image">
              <img src={Feat01} alt="features-image" />
              <div className="image-shape">
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-5 col-md-7">
            <div className="features-one-info">
              <div className="heading-box">
                <span className="heading-subtitle wow fadeInUp animated animated">
                  🤝 WHO WE ARE
                </span>
                <h2 className="heading-title wow fadeInUp animated animated">
                  Flexible, quick and fast business loans
                </h2>
              </div>
              <p>
                Get the funding you need with our flexible and quick business
                loans. Tailored to meet your unique needs, our loans offer
                competitive rates and fast approval. Empower your business to
                grow and thrive with the right financial support.
              </p>
              <div className="features-one-list-block">
                <ul className="features-one-list">
                  <li>Robust data ensuring client privacy.</li>
                  <li>Expert assistance every step of the way.</li>
                  <li>User-friendly interface application.</li>
                  <li>Competitive rates to ease financial burden.</li>
                  <li>Customized loan plans for unique needs.</li>
                  <li>Streamlined processes for approvals.</li>
                </ul>
              </div>
              <Link to="/Applyloan" className="btn btn-secondary">
                Get Started
                <i className="flaticon-next" />
              </Link>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-8 col-sm-10">
            <form
              action="#"
              id="loan-calculator"
              className="features-one-form wow fadeInUp animated animated"
              data-wow-duration="2000ms"
              data-wow-delay="500ms"
            >
              <h3>How much do you need?</h3>
              <div className="features-one-form-content">
                <div className="input-box__top">
                  <span>$10,000</span>
                  <span>$100,000</span>
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
                    fontSize: "18px",
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
                    fontSize: "18px",
                    color: "#000",
                  }}
                >
                  {loanDuration}
                </div>

                <p>
                  <span>Pay Monthly</span>
                  <b>${monthlyPayment}</b>
                </p>
                <p>
                  <span>Total Pay Back</span>
                  <b>${totalPayBack}</b>
                </p>
                <button type="submit" className="btn btn-primary btn-block">
                  Apply For Loan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuresone;