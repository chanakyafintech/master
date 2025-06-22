import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetail from '../Mainblogstandard/Teamdetail';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return (
        <>
        <Preloader/>
            <Headertwo />
            <Blogbred  Title="Blog Standard" Subtitle="Blog Standard"/>
            <Teamdetail/>
            <Ctaone/>
            <Footertwo/>
            <BackToTop/>
        </>
    )
}
export default Main;