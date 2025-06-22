import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Innerpage from "../../Portfolio/MenPortfolioDeatails/Innerpage";
import Details from "../MenPortfolioDeatails/Details";
import Portfolio from "../MenPortfolioDeatails/Portfolio";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

const Main = () => {
    return(
        <>
        <Preloader/>
          <Headertwo/>
          <Innerpage/>
          <Details/>
          <Portfolio/>
          <Ctaone/>
          <Footertwo/>
          <BackToTop/>
        </>
    )
}
export default Main;