import React from 'react'
import img from '../styl/0.jpg'
import '../App.css'
import { Fatch } from './Fatch';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className="home">
      <div className=" text-center  ml-80">
        <h1 className=" text-5xl text-center  text-white">
          GET THE LATEST WEATHER UPDATES
        </h1>
        <h2>The best place to search for your city</h2>
        <Fatch />
      </div>
    </div>
  );
}

export default Home