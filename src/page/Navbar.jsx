import React from 'react'
import Toggle from "../Toggle/Toggle";
import { UilBullseye } from '@iconscout/react-unicons'
const Navbar = () => {
  return (
    <div>
      <header className="body-font">
        <div
          className={
            "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
          }
        >
          <a
            className={"flex title-font font-medium items-center  mb-4 md:mb-0"}
          >
            <UilBullseye className="text-2xl" />
            <span className="ml-3    font-black">WEATHER</span>
          </a>
          <nav
            className={
              " text-orange-400 text-3xl font-bold md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"
            }
          >
            <a className={"mr-5 hover:text-green-400 "}>Home</a>
            <a className={"mr-5 hover:text-green-400"}>About </a>
            <a className={"mr-5 hover:text-green-400"}>Blog </a>
            <a className={"mr-5 hover:text-green-400"}>Updates</a>
          </nav>

          <button
            className={
              "inline-flex items-center  bg-yellow-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            }
          >
            <Toggle />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar