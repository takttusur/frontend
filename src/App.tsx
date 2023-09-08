import './App.css';
import MainMenu from './components/Navigation/MainMenu';
import Footer from './components/Footer';
import MainPage from './MainPage';
import CurrentEventsComponent from './components/CurrentEvents/CurrentEventsComponent';
import EquipmentComponent from './components/Equipment/EquipmentComponent';
import NewsComponent from './components/News/NewsComponent';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
        <>
            <MainMenu />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/CurrentEvents" element={<CurrentEventsComponent />} />
              <Route path="/Equipment" element={<EquipmentComponent />} />
              <Route path="/News" element={ <NewsComponent /> } />
            </Routes>
            <Footer/>
        </>
  );
}