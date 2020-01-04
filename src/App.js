import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Cards from './Components/Cards';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="Main">
      <Navbar />
      <Slider />
      <h4>Teams</h4>
      <Cards />
      <Footer />
    </div>
  )
}
