import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Servicebred from '../../Global/Servicebred';
import Servicesthree from '../../Services/Mainservices1/Servicesthree';
import Testimonialone from '../../Home/Mainhomeone/Testimonialone';
import Pricingplan from '../../Services/Mainservices1/Pricingplanone';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Servicebred Title="Our Services 1" Subtitle="Our Services" />
            <Servicesthree />
            <Testimonialone />
            <Pricingplan />
            <Ctaone />
            <Footertwo />
            <BackToTop/>
        </>
    )
}
export default Main;