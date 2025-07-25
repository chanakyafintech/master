import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetail from '../Mainblogstandard/Teamdetail';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';
import Footer from '../../Global/Footer';

const Main = () => {
    return (
        <>
        
            <Blogbred  Title="Blog Standard" Subtitle="Blog Standard"/>
            <Teamdetail/>
            <Ctaone/>
            <Footer/>
            <BackToTop/>
        </>
    )
}
export default Main;