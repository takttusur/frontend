import WallpaperCarousel from './components/WallpaperCarousel';
import CurrentEventsWidget from './components/CurrentEvents/CurrentEventsWidget';
import EquipmentWidget from './components/Equipment/EquipmentWidget';
import NewsWidget from './components/News/NewsWidget';

export default function MainPage() {
  return (
        <>
            <WallpaperCarousel/>
            <CurrentEventsWidget/>
            <EquipmentWidget/>
            <NewsWidget/>            
        </>
  );
}