import React from 'react'
import Preloader from '../../Global/Preloader';
import Headertwo from '../../Global/Headertwo';
import Servicedtlbred from '../Mainservicesdetails/Servicedtlbred';
import Servicesdetails from '../Mainservicesdetails/Servicesdetails';
import Ctaone from '../../Global/Ctaone';
import Footertwo from '../../Global/Footertwo';
import BackToTop from '../../Global/BackToTop';
import Footer from '../../Global/Footer';

const Main = () => {
    return (
        <>
            
            <Servicedtlbred />
            <Servicesdetails />
            <Ctaone />
            <Footer />
            <BackToTop/>
        </>
    )
}
export default Main;