import React from "react";
import Preloader from "../Global/Preloader";
import Headertwo from "../Global/Headertwo";
import Innerpage from "../MenContactus/Innerpage";
import Aboutthree from "../MenContactus/Aboutthree";
import Contact from "../MenContactus/Contact";
import Footertwo from "../Global/Footertwo";
import BackToTop from '../Global/BackToTop';

const Main = () => {
   return (
      <>
         <Preloader />
         <Headertwo />
         <Innerpage />
         <Aboutthree />
         <Contact />
         <Footertwo />
         <BackToTop/>
      </>
   )
}
export default Main;