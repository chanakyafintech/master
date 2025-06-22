import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/Header_logo.svg';
import Logo01 from '../../../assets/images/logo.png';
import Logo02 from '../../../assets/images/logo-black.svg';

const Headerthree = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isSearchActive, setSearchActive] = useState(false);
    const [isMenuExpanded, setMenuExpanded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    const toggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <>
            <header className={isFixed ? "main-header main-header-three sticky-header--cloned sticky-fixed" : "main-header main-header-three"}>
                <div className="container-fluid">
                    <nav className="main-menu">
                        <div className="main-menu-logo">
                            <Link to="/">
                                <img src={Logo} alt="header-logo" />
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
                                    <Link to="#">Services</Link>
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
                        <div className="main-menu-right" >
                            <ul className="contact-info">
                                <li>
                                    <i className="flaticon-envelope" />
                                    <Link to="mailto:Loanlift@gmail.com">help@company.com</Link>
                                </li>
                            </ul>
                            <div className={`menu-right-end  ${isSearchActive ? "setSearchActive" : ""}`}>
                                <Link to="#" className="search-btn" onClick={handleSearchClick}>
                                    <i className="flaticon-search-interface-symbol" />
                                </Link>
                                <span />
                                <div className="header-side-menu" onClick={toggleSideMenu}>

                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
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
                                <img width={150} src={Logo01} alt="logo" />
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
                                                <Link to="/services1">Services </Link>
                                            </li>
                                            <li>
                                                <Link to="/services2">Services 2</Link>
                                            </li>
                                            <li>
                                                <Link to="/servicesdetails">Services Details</Link>
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
                                                <Link to="/Portfoliogrid">Portfolio Grid</Link>
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
                <div className={`side-menu-wrapper ${isMenuOpen ? "expanded" : ""}`}>
                    <div className="side-menu-overlay" />
                    <div className="side-menu-content">
                        <Link to="#" className="side-menu-toggler" onClick={toggleSideMenu}>
                            <span />
                            <span />
                        </Link>
                        <div className="side-menu-logo-box">
                            <Link to="/">
                                <img src={Logo02} alt="logo" />
                            </Link>
                        </div>
                        <div className="side-menu-container">
                            <p>
                                Loanlift - Business Consulting WordPress Theme for professionals,
                                services, and solutions.
                            </p>
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                    <i className="flaticon-clock" />
                                    <span>Mon - Frd : 8:00 -16:00</span>
                                </li>
                                <li>
                                    <i className="flaticon-envelope" />
                                    <Link to="#">help@company.com</Link>
                                </li>
                                <li>
                                    <i className="flaticon-phone" />
                                    <Link to="#"> +120.098.456 11</Link>
                                </li>
                            </ul>
                            <h4>Office Address</h4>
                            <p>28 Valencia Street, New York United States of America</p>
                            <ul className="side-menu-social-media">
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
            </header>
            {isSearchActive && (
                <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
                    <button className="close-search " onClick={handleCloseSearch} />
                    <form method="post" action="blog.html">
                        <div className="form-group">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search Here"
                                required=""
                                position="absolute"
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
export default Headerthree;