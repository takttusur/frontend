import { lazy } from 'react';
import './App.css';

import MainMenu from './MainMenu';
import CurrentEvents from './CurrentEvents';
import WallpaperCarousel from './WallpaperCarousel';
import Equipment from './Equipment';
import Footer from './Footer';

const News = lazy(() => import( './News' ));

export default function App() {
  return (
    <>
      <MainMenu />
      <WallpaperCarousel />
      <a id='События' />
      <CurrentEvents />
      <a id='Склад' />
      <Equipment />
      <a id='Новости' />
      <News />
      <Footer />
    </>
  );
}