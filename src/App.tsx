import './App.css';
import MainMenu, { EQUIPMENT_SECTION, NEWS_SECTION, EVENTS_SECTION } from './components/Navigation/MainMenu';
import WallpaperCarousel from './components/WallpaperCarousel';
import CurrentEvents from './components/CurrentEvents/CurrentEventsWidget';
import Equipment from './components/Equipment/EquipmentWidget';
import News from './components/News/NewsWidget';
import Footer from './components/Footer';

export default function App() {
  return (
        <>
            <MainMenu/>
            <WallpaperCarousel/>
            <a id={EVENTS_SECTION}/>
            <CurrentEvents/>
            <a id={EQUIPMENT_SECTION}/>
            <Equipment/>
            <a id={NEWS_SECTION}/>
            <News/>
            <Footer/>
        </>
  );
}