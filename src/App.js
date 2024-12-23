import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FaqSection from './components/FaqSection';
import OfficialPartner from './components/OfficialPartner';
import PlayFeature from './components/PlayFeature';
import FantasyPage from './components/FantasyPage';
import FooterPage from './components/FooterPage';

function App() {
  return (
   
    <>
    <Header/>
    <HeroSection/>
    <OfficialPartner/>
    <PlayFeature/>
    <FantasyPage/>
    <FaqSection/>
    <FooterPage/>
    </>
  );
}

export default App;
