import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetails from '../Mainblogdetails/Teamdetail';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return (
        <>
        <Preloader/>
            <Headertwo />
            <Blogbred Title="A Beginner’s Guide to Securing Your First Loan" Subtitle="Blog Details"/>
            <Teamdetails/>
            <Ctaone/>
            <Footertwo/>
            <BackToTop/>
        </>
    )
}
export default Main;