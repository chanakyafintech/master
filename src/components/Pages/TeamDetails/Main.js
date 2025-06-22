import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Faqbreadcumb from "../../Global/Faqbreadcumb";
import Teamdetail from "../MenTeamDetails/Teamdetail";
import Teamone from "../../Home/Mainhomeone/Teamone";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

const Main = () =>{
    return(
        <>
        <Preloader/>
        <Headertwo/>
        <Faqbreadcumb Title="Brian Hollifield" Subtitle="Team"/>
        <Teamdetail/>
        <Teamone/>
        <Ctaone/>
        <Footertwo/>
        <BackToTop/>
        </>
    )
}
export default Main;