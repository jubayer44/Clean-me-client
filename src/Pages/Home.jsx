import React from "react";
import { Link } from "react-router-dom";
import Feature from "./Feature";

const Home = () => {




  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="text-yellow-400 mb-3 font-semibold">We are here to help you make an</p>
          <h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-violet-400">
            CLEAN HOME
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          Your health and safety is our utmost priority. We accommodate to our clients so if there is a certain way you would like to approach future cleanings please inform us.
            
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 text-lg font-semibold rounded bg-violet-600 dark:text-gray-900"
            >
              Get Started
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://img.freepik.com/premium-photo/young-man-cleaning-sofa-with-vacuum-cleaner-leaving-room-home_130111-3594.jpg?w=900"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-full"
          />
        </div>
      </div>
      <Feature/>
    </section>
  );
};

export default Home;
