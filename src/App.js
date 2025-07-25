import { BrowserRouter as Router } from 'react-router-dom';
import Routing from "../src/Router/index";
import './assets/vendors/bootstrap/css/bootstrap.min.css';
import './assets/vendors/slick/slick.css';
import './assets/vendors/animation/animate.min.css';
import './assets/vendors/font-awesome/css/all.min.css';
import './assets/vendors/icon/font/flaticon_loan.css';
import './assets/vendors/nouislider/css/nouislider.min.css';
import './assets/vendors/nouislider/css/nouislider.pips.css';
import './assets/vendors/youtube-popup/youtube-popup.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './App.css';
import Headerone from './components/Home/Mainhomeone/Headerone';
import Footer from './components/Global/Footer';  


function App() {
  return (
    <Router>

      <Headerone/>
      <Footer/>
      <Routing />
    </Router>
  );
}

export default App;
