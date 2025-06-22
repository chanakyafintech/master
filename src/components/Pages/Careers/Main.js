import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import CareersBred from "../../Global/CareersBred";
import Careersloan from "../MenCareers/Careersloan";
import Careerscta from "../MenCareers/Careerscta";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

const Main = () =>{
    return(
        <>
        <Preloader/>
        <Headertwo/>
        <CareersBred Title="Careers" Subtitle="Careers"/>
        <Careersloan/>
        <Careerscta/>
        <Footertwo/>
        <BackToTop/>
        </>
    )
}
export default Main;