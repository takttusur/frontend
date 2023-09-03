import MainMenu from './components/Navigation/MainMenu';
import CurrentEventsComponent from './components/CurrentEvents/CurrentEventsComponent';
import Footer from './components/Footer';

export default function CurrentEvents() {
  return (
        <>
            <MainMenu />
            <CurrentEventsComponent />
            <Footer />
        </>        
  );
}