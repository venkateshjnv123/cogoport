import logo from './logo.svg';
import './App.css';
import NavbarMain from './components/Navbar';
import Homepage from './components/MainPage';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import TrustedBy from './components/TrustedBy';
import Products from './components/products';
import GetStarted from './components/Getstartedtoday';
import Videocogo from './components/Videocogo';
import Notification from './components/Notification';
import Count from './components/count';
import Blogs from './components/Blogs';
import Indus from './components/Industriesnew';
import Newsletter from './components/newsletter';
import Footermob from './components/footermob';
import Ready from './components/Ready';
import Count1 from './components/Copyright'
import Whatsappbtn from './components/Whatsappbutton';
function App() {
  return (
    <div className="App">
      <Whatsappbtn/>
      <Notification/>
     <NavbarMain/>
     <Homepage/>
     <Count />
     <Products/>
     <TrustedBy/>
     <Ready/>
     <HowItWorks/>
     <Indus />
     <GetStarted/>
     <Videocogo/>
      <Blogs />
   
      <Newsletter /> 
      <Footermob />
      <Count1/>
     
     
    </div>
  );
}

export default App;
