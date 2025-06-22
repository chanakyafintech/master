import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Blogbred from '../../Global/Blogbred';
import Teamdetail from '../Mainbloggrid2/Teamdetail';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Blogbred Title="Blog Columns" Subtitle="Blog Grid 3 Columns" />
            <Teamdetail />
            <Ctaone />
            <Footertwo />
            <BackToTop />
        </>
    )
}
export default Main;