import React from "react";
import Preloader from '../../Global/Preloader';
import Headertwo from "../../Global/Headertwo";
import Faqbreadcumb from "../../Global/Faqbreadcumb";
import Team from "../MenTeam/Team";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';
import Footer from "../../Global/Footer";

const Main = () =>{
    return(
        <>
        
        
         <Faqbreadcumb Title="Team page" Subtitle="Team Details"/>
         <Team/>
         <Ctaone/>
         <Footer/>
         <BackToTop/>
        </>
    )
}
export default Main;