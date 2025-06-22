import React from "react";

const Applyloans = () => {
    return (
        <>
            <div className="apply-loan-section">
                <div className="container">
                    <div className="heading-box">
                        <span className="heading-subtitle wow fadeInUp animated animated">
                            🤝 CALCULATE YOU LOAN AMOUNT
                        </span>
                        <h3>Loan Details</h3>
                    </div>
                    <form action="#">
                        <div className="apply-loan-widget">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Loan Amount*</label>
                                        <input
                                            type="number"
                                            name="amount"
                                            placeholder="Loan Amount"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Monthly Income*</label>
                                        <input
                                            type="number"
                                            name="income"
                                            placeholder="Monthly Income"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Purpose of Loan*</label>
                                        <select name="purpose" className="from-dropdown" required="">
                                            <option>Purpose of Loan</option>
                                            <option value="">
                                                Secure a loan to buy your dream home or investment property.
                                            </option>
                                            <option value="">
                                                Lower your interest rate, reduce monthly payments, or access
                                                equity.
                                            </option>
                                            <option value="">
                                                Cover tuition fees and education-related expenses for yourself
                                                or family.
                                            </option>
                                            <option value="">
                                                Pay for unexpected medical bills or treatments.
                                            </option>
                                            <option value="">
                                                Address urgent financial needs with immediate access to funds.
                                            </option>
                                            <option value="">
                                                Fund renovations or upgrades to enhance the value of your
                                                property.
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Loan Years*</label>
                                        <select name="Years" className="from-dropdown" required="">
                                            <option>Loan Years</option>
                                            <option value={2}>2 Years</option>
                                            <option value={4}>4 Years</option>
                                            <option value={6}>6 Years</option>
                                            <option value={8}>8 Years</option>
                                            <option value={10}>10 Years</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="apply-loan-widget">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading">
                                        <h3>Personal Details</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Full Name*</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>E-Mail</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-Mail Id"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Mobile Number*</label>
                                        <input
                                            type="number"
                                            name="number"
                                            placeholder="Mobile Number"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Marital Status*</label>
                                        <select name="Marital" className="from-dropdown" required="">
                                            <option>Select Marital Status</option>
                                            <option value="Married">Married</option>
                                            <option value="Unmarried">Unmarried</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Birth Date*</label>
                                        <input type="date" name="Birth-Date" required="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Taxpayer ID*</label>
                                        <input
                                            type="text"
                                            name="Taxpayer"
                                            placeholder="Taxpayer ID"
                                            required=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="apply-loan-widget">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading">
                                        <h3>Other Details</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Property Location*</label>
                                        <input
                                            type="text"
                                            name="Address"
                                            placeholder="Write A Full Address"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label>Employer Status*</label>
                                        <select name="Employ" className="from-dropdown" required="">
                                            <option>Select Employ status</option>
                                            <option value="Part-Time">Part Time</option>
                                            <option value="Full-Time">Full Time</option>
                                            <option value="Self-Employ">Self Employ</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-8 col-sm-10">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-secondary">
                                            Apply Loan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Applyloans;