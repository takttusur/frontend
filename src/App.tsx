import './App.css';
import MainMenu from './components/Navigation/MainMenu';
import Footer from './components/Footer';
import MainPage from './MainPage';
import CurrentEvents from './pages/CurrentEvents';
import Equipment from './pages/Eqiupment';
import News from './pages/News';
import MealPlanner from './pages/MealPlanner';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
        <>
            <MainMenu />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/CurrentEvents" element={<CurrentEvents />} />
              <Route path="/Equipment" element={<Equipment />} />
              <Route path="/News" element={ <News /> } />
              <Route path="/MealPlanner" element={ <MealPlanner /> } />
            </Routes>
            <Footer/>
        </>
  );
}