import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetails from '../Mainblogdetails/Teamdetail';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';
import Footer from '../../Global/Footer';

const Main = () => {
    return (
        <>
        
            <Blogbred Title="A Beginner’s Guide to Securing Your First Loan" Subtitle="Blog Details"/>
            <Teamdetails/>
            <Ctaone/>
            <Footer/>
            <BackToTop/>
        </>
    )
}
export default Main;