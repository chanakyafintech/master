import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Homeone from '../components/Home/Homeone/Main';
import Hometwo from '../components/Home/Hometwo/Main';
import Homethree from '../components/Home/Homethree/Main';
import Aboutus from '../components/Pages/Aboutus/Main';
import Faq from '../components/Pages/Faq/Main';
import Careers from '../components/Pages/Careers/Main';
import Applyaloan from '../components/Pages/Applyaloan/Main';
import Team from '../components/Pages/Team/Main';
import TeamDetails from '../components/Pages/TeamDetails/Main';
import Services1 from '../components/Services/Services1/Main';
import Services2 from '../components/Services/Services2/Main';
import Servicesdetails from '../components/Services/Servicesdetails/Main';
import Portfolio from '../components/Portfolio/Portfolio/Main';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid/Main';
import PortfolioDetails from '../components/Portfolio/PortfolioDetails/Main';
import Contactus from '../components/Contactus/Main';
import Blogstandard from '../components/Blog/Blogstandard/Main';
import Bloggrid from '../components/Blog/Bloggrid/Main';
import Bloggrid2 from '../components/Blog/Bloggrid2/Main';
import Blogdetails from '../components/Blog/Blogdetails/Main';

const index = () => {
   
    return (
        <Routes>
            <Route path='/' element={<Homeone />} />
            <Route path='/Hometwo' element={<Hometwo />} />
            <Route path='/Homethree' element={<Homethree />} />
            <Route path='/Aboutus' element={<Aboutus />} />
            <Route path='/Faq' element={<Faq />} />
            <Route path='/Careers' element={<Careers />} />
            <Route path='/Applyloan' element={<Applyaloan />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/TeamDetails' element={<TeamDetails />} />
            <Route path='/Services1' element={<Services1 />} />
            <Route path='/Services2' element={<Services2 />} />
            <Route path='/Servicesdetails' element={<Servicesdetails />} />
            <Route path='/Portfolio' element={<Portfolio />} />
            <Route path='/PortfolioGrid' element={<PortfolioGrid />} />
            <Route path='/PortfolioDetails' element={<PortfolioDetails />} />
            <Route path='/Blogstandard' element={<Blogstandard />} />
            <Route path='/Bloggrid' element={<Bloggrid />} />
            <Route path='/Bloggrid2' element={<Bloggrid2 />} />
            <Route path='/Blogdetails' element={<Blogdetails />} />
            <Route path='/Contactus' element={<Contactus />} />
        </Routes>
    )
}
export default index;