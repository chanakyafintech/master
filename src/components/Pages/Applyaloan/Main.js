import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import CareersBred from "../../Global/CareersBred";
import Applyloans from "../MenApplyaloan/Applyloans";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';
import Footer from "../../Global/Footer";

const Main = () => {
    return(
        <>
        
        <CareersBred Title="Apply Now" Subtitle="Apply Now"/>
        <Applyloans/>
        <Footer/>
        <BackToTop/>
        </>
    )
}
export default Main;