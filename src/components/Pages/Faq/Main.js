import React from "react";
import Preloader from "../../Global/Preloader";
import Headertwo from "../../Global/Headertwo";
import Faqbreadcumb from "../../Global/Faqbreadcumb";
import Teamdetail from "../MenFaq/Teamdetails";
import Ctaone from "../../Global/Ctaone";
import Footertwo from "../../Global/Footertwo";
import BackToTop from '../../Global/BackToTop';

const Faq = () => {
    return(
        <>
        <Preloader/>
         <Headertwo/>
         <Faqbreadcumb Title="FAQS" Subtitle="FAQS"/>
         <Teamdetail/>
         <Ctaone/>
         <Footertwo/>
         <BackToTop/>
        </>
    )
}
export default Faq;