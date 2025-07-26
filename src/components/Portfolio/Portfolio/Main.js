import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Portfolio from "../MenPortfolio/Portfolio";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import Portfoliobred from "../../Global/Portfoliobred";
import BackToTop from '../../Global/BackToTop';
import Footer from "../../Global/Footer";

const Main =()=>{
    return(
        <>
        
        
         <Portfoliobred Title="Portfolio" Subtitle="Portfolio"/>
         <Portfolio/>
         <Ctaone/>
         <Footer/>
         <BackToTop/>
        </>
    )
}
export default Main;