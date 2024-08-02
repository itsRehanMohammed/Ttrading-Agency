import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-3">
      <div className="container lg:max-w-7xl mx-auto flex flex-col mb-4 px-5 pt-12 sm:mt-0 mt-10 md:pt-20 md:pb-6 justify-center items-center">
        <div className="w-full flex flex-row rounded-xl mb-6 py-10 sm:py-0 items-center text-center bg-gray-100 p-2">
          <img
            src="./assets/trade2.png"
            className="w-1/3 sm:mx-10"
            alt="Trading illustration"
          />
          <div className="mx-4 sm:mx-10">
            <h1 className="font-semibold sm:text-3xl text-lg text-start">
              Empowering Traders, Inspiring Excellence
            </h1>
            <p className="text-gray-600 sm:text-lg mt-1 sm:pr-20 text-sm text-start">
              Experience innovation, limitless possibilities, and unprecedented
              profits with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
