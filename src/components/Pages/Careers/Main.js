import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import CareersBred from "../../Global/CareersBred";
import Careersloan from "../MenCareers/Careersloan";
import Careerscta from "../MenCareers/Careerscta";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';
import Footer from "../../Global/Footer";

const Main = () =>{
    return(
        <>
        
        <CareersBred Title="Careers" Subtitle="Careers"/>
        <Careersloan/>
        <Careerscta/>
        <Footer/>
        <BackToTop/>
        </>
    )
}
export default Main;