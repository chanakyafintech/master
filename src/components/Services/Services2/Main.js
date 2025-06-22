import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Servicebred from '../../Global/Servicebred';
import Abouttwo from '../../Home/Mainhomethree/Abouttwo';
import Servicestwo from '../../Home/Mainhometwo/Servicestwo';
import Testimonialone from '../../Home/Mainhomeone/Testimonialone';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return (
        <>
            <Preloader />
            <Headertwo />
            <Servicebred Title="Our Services 2" Subtitle="Our Services 2" />
            <Abouttwo />
            <Servicestwo />
            <Testimonialone />
            <Ctaone />
            <Footertwo />
            <BackToTop/>
        </>
    )
}
export default Main;