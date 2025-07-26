import React from "react";
import Preloader from "../Global/Preloader";
import Headertwo from "../Global/Headertwo";
import Innerpage from "../MenContactus/Innerpage";
import Aboutthree from "../MenContactus/Aboutthree";
import Contact from "../MenContactus/Contact";
import Footertwo from "../Global/Footertwo";
import BackToTop from '../Global/BackToTop';
import Footer from "../Global/Footer";

const Main = () => {
   return (
      <>
         <Innerpage />
         <Aboutthree />
         <Contact />
         <Footer/>
         <BackToTop/>
      </>
   )
}
export default Main;