import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import CareersBred from "../../Global/CareersBred";
import Applyloans from "../MenApplyaloan/Applyloans";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return(
        <>
        <Preloader/>
        <Headertwo/>
        <CareersBred Title="Apply Now" Subtitle="Apply Now"/>
        <Applyloans/>
        <Footertwo/>
        <BackToTop/>
        </>
    )
}
export default Main;