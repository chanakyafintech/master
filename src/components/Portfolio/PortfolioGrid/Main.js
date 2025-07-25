import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Portfoliobred from "../../Global/Portfoliobred";
import Portfoliotwo from "../MenPortfolioGrid/Portfoliotwo";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';
import Footer from "../../Global/Footer";

const Main = () =>{
    return(
        <>
      
         <Portfoliobred Title="Portfolio Grid" Subtitle="Portfolio"/>
         <Portfoliotwo/>
         <Ctaone/>
         <Footer/>
         <BackToTop/>
        </>
    )
}
export default Main;