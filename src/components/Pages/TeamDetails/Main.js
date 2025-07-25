import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Faqbreadcumb from "../../Global/Faqbreadcumb";
import Teamdetail from "../MenTeamDetails/Teamdetail";
import Teamone from "../../Home/Mainhomeone/Teamone";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';
import Footer from "../../Global/Footer";

const Main = () =>{
    return(
        <>
        <Faqbreadcumb Title="Brian Hollifield" Subtitle="Team"/>
        <Teamdetail/>
        <Teamone/>
        <Ctaone/>
        <Footer/>
        <BackToTop/>
        </>
    )
}
export default Main;