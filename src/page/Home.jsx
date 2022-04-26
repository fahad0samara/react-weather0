import React from "react";

import "../App.css";
import {Fatch} from "./Fatch";

const Home = () => {
  return (
    <div className="home ">
      <div className=" text-center  flex flex-col mb-14    space-y-7">
        <h1 className=" text-5xl text-center   font-bold text-white">
          GET THE LATEST WEATHER UPDATES
        </h1>
        <h2 className=" text-3xl text-center font-extrabold text-orange-400   ">
          The best place to search for your city
        </h2>
        <Fatch />
      </div>
    </div>
  );
};

export default Home;
