import React, { useState, useEffect } from "react";
import Logob01 from '../../assets/images/logo-black.svg';
import Logo02 from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

const Headertwo = () => {

    const [isFixed, setIsFixed] = useState(false);
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMenuExpanded, setMenuExpanded] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleScroll = () => {
        setIsFixed(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleSearchClick = () => {
        setSearchActive(true);
        document.body.classList.add("search-active");
    };

    const handleCloseSearch = () => {
        setSearchActive(false);
        document.body.classList.remove("search-active");
    };
    const toggleMenu = () => {
        setMenuExpanded(prevState => !prevState);

    };
    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <>
            <div className="topbar-three">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <p>Welcome to Loan lift Your Trusted Financial partner</p>
                        </div>
                        <div className="col-4">
                            <ul className="topbar-three-social-media">
                                <li>
                                    <Link to="https://www.facebook.com/">
                                        <i className="fa-brands fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://x.com/">
                                        <i className="fa-brands fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/">
                                        <i className="fa-brands fa-instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://in.linkedin.com/">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <header className={isFixed ? "main-header main-header-four sticky-header--cloned sticky-fixed" : "main-header main-header-four"}>
                <div className="container">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link to="/">
                                <img src={Logob01} alt="header-logo" />
                            </Link>
                        </div>
                        <div className="main-menu-inner">
                            <ul className="main-menu-list">
                                <li className="menu-item-children">
                                    <Link to="#">Home</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link to="/">Home One</Link>
                                        </li>
                                        <li>
                                            <Link to="/Hometwo">Home Two</Link>
                                        </li>
                                        <li>
                                            <Link to="/Homethree">Home Three</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="#">Pages</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link to="/Aboutus">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/Faq">FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to="/Careers">Careers</Link>
                                        </li>
                                        <li>
                                            <Link to="/Applyloan">Apply a Loan</Link>
                                        </li>
                                        <li>
                                            <Link to="/Team">Meet The Team</Link>
                                        </li>
                                        <li>
                                            <Link to="/Teamdetails">Team Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="/services">Services</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link to="/Services1">Services </Link>
                                        </li>
                                        <li>
                                            <Link to="/Services2">Services 2</Link>
                                        </li>
                                        <li>
                                            <Link to="/Servicesdetails">Services Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="#">Portfolio</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link to="/Portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="/Portfoliogrid">Portfolio Grid</Link>
                                        </li>
                                        <li>
                                            <Link to="/Portfoliodetails">Portfolio Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="#">Blog</Link>
                                    <i className="fa-solid fa-chevron-down" />
                                    <ul>
                                        <li>
                                            <Link to="/Blogstandard">Blog Standard</Link>
                                        </li>
                                        <li>
                                            <Link to="/Bloggrid">Blog Grid</Link>
                                        </li>
                                        <li>
                                            <Link to="/Bloggrid2">Blog Grid 2</Link>
                                        </li>
                                        <li>
                                            <Link to="/Blogdetails">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-children">
                                    <Link to="/Contactus">Contact Us</Link>
                                </li>
                            </ul>
                            <div className="header-right-end" onClick={toggleMenu}>
                                <span className="line-1" />
                                <span className="line-2" />
                                <span className="line-3" />
                            </div>
                        </div>
                        <div className={`main-menu-right ${isSearchActive ? "active" : ""}`}>
                            <Link to="#" className="search-btn" onClick={handleSearchClick}>
                                <i className="flaticon-search-interface-symbol" />
                            </Link>
                            <Link to="tel:+020.098.45611" className="menu-phone">
                                {" "}
                                <i className="flaticon-phone" />
                                +020.098.456 11
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className={`mobile-nav-wrapper ${isMenuExpanded ? "expanded" : ""}`}>
                    <div className="mobile-nav-overlay mobile-nav-toggler" onClick={toggleMenu} />
                    <div className="mobile-nav-content">
                        <Link to="#" className="mobile-nav-close mobile-nav-toggler" onClick={toggleMenu}>
                            <span />
                            <span />
                        </Link>
                        <div className="logo-box">
                            <Link to="/">
                                <img width={150} src={Logo02} alt="logo" />
                            </Link>
                        </div>
                        <div className="mobile-nav-container">
                            <ul className="mobile-menu-list">
                                <li className={`menu-item-has-children ${openDropdown === 1 ? "dropdown-open" : ""}`}>
                                    <Link to="#" className="expended" onClick={() => toggleDropdown(1)}>Home
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 1 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 1 && (
                                        <ul>
                                            <li>
                                                <Link to="/">Home-1</Link>
                                            </li>
                                            <li>
                                                <Link to="/Hometwo">Home-2</Link>
                                            </li>
                                            <li>
                                                <Link to="/Homethree">Home-3</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 2 ? "dropdown-open" : ""}`}>
                                    <Link to="#" className="expanded" onClick={() => toggleDropdown(2)}>Services
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 2 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 2 && (
                                        <ul>
                                            <li>
                                                <Link to="/Services1">Services </Link>
                                            </li>
                                            <li>
                                                <Link to="/Services2">Services 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/Servicesdetails">Services Details</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 3 ? "dropdown-open" : ""}`}>
                                    <Link to="#" className="expanded" onClick={() => toggleDropdown(3)}>Pages
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 3 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 3 && (
                                        <ul>
                                            <li>
                                                <Link to="/Aboutus">About Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/Faq">FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to="/Careers">Careers</Link>
                                            </li>
                                            <li>
                                                <Link to="/Applyloan">Apply a Loan</Link>
                                            </li>
                                            <li>
                                                <Link to="/Contactus">Contact Us</Link>
                                            </li>
                                            <li>
                                                <Link to="/Team">Meet The Team</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 4 ? "dropdown-open" : ""}`}>
                                    <Link to="#" className="expanded" onClick={() => toggleDropdown(4)}>Blog
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 4 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 4 && (
                                        <ul>
                                            <li>
                                                <Link to="/Blogstandard">Blog Standards</Link>
                                            </li>
                                            <li>
                                                <Link to="/Bloggrid">Blog Grid</Link>
                                            </li>
                                            <li>
                                                <Link to="/Bloggrid2">Blog Grid 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/Blogdetails">Blog Details</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`menu-item-has-children ${openDropdown === 5 ? "dropdown-open" : ""}`}>
                                    <Link to="#" className="expanded" onClick={() => toggleDropdown(5)}>Portfolio
                                        <button
                                            aria-label="dropdown toggler"
                                            className={`dropdown-btn ${openDropdown === 5 ? "expanded" : ""}`}
                                            onClick={() => setOpenDropdown(!openDropdown)}
                                        >
                                            <i className="flaticon-right-arrow" />
                                        </button>
                                    </Link>
                                    {openDropdown === 5 && (
                                        <ul>
                                            <li>
                                                <Link to="/Portfolio">Portfolio</Link>
                                            </li>
                                            <li>
                                                <Link to="/PortfolioGrid">Portfolio Grid</Link>
                                            </li>
                                            <li>
                                                <Link to="/Portfoliodetails">Portfolio Details</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {isSearchActive && (
                <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
                    <button className="close-search " onClick={handleCloseSearch} />
                    <form method="post" action="/Blog">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search Here"
                                required=""
                            />
                            <button type="submit">
                                <i className="flaticon-search" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
export default Headertwo;