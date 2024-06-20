import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousal from './components/Carousal';
import MovieRow from './components/MovieRow';
import MovieSlider from './components/MovieSlider';

const images1 = [
  'm1.jpg',
  'm2.jpg',
  'm3.jpg',
  'm4.jpg',
  'm5.jpg'
];
const images2 = [
  'm6.jpg',
  'm7.jpg',
  'm8.jpg',
  'm9.jpg',
  'm10.jpg'
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
