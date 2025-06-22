import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Portfoliobred from "../../Global/Portfoliobred";
import Portfoliotwo from "../MenPortfolioGrid/Portfoliotwo";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

const Main = () =>{
    return(
        <>
        <Preloader/>
         <Headertwo/>
         <Portfoliobred Title="Portfolio Grid" Subtitle="Portfolio"/>
         <Portfoliotwo/>
         <Ctaone/>
         <Footertwo/>
         <BackToTop/>
        </>
    )
}
export default Main;