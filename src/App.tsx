import './App.css';
import MainMenu from './components/Navigation/MainMenu';
import WallpaperCarousel from './components/WallpaperCarousel';
import CurrentEventsWidget from './components/CurrentEvents/CurrentEventsWidget';
import EquipmentWidget from './components/Equipment/EquipmentWidget';
import NewsWidget from './components/News/NewsWidget';
import Footer from './components/Footer';

export default function App() {
  return (
        <>
            <MainMenu />
            <WallpaperCarousel/>
            <CurrentEventsWidget/>
            <EquipmentWidget/>
            <NewsWidget/>
            <Footer/>
        </>
  );
}