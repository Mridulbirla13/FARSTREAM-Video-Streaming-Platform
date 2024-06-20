import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousal from './components/Carousal';
import MovieRow from './components/MovieRow';
import MovieSlider from './components/MovieSlider';

const images1 = [
  '../assets/m1.jpg',
  '../assets/m2.jpg',
  '../assets/m3.jpg',
  '../assets/m4.jpg',
  '../assets/m5.jpg'
];
const images2 = [
  '../assets/m6.jpg',
  '../assets/m7.jpg',
  '../assets/m8.jpg',
  '../assets/m9.jpg',
  '../assets/m10.jpg'
];
function App() {
  return (
    <>
      <Navbar />
      <div className="mainview">
        <Carousal />
        <div className="viewRow">
          <MovieSlider headerText="Popular on FARSIGHT!" images={images1}/>
          <MovieSlider headerText="You will love to watch it!" images={images2}/>
        </div>
      </div>
      <div className="content-info">
        <Footer />
      </div>
    </>
  );
}

export default App;
