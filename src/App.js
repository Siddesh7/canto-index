import React from "react";
import undraw from "./assets/undraw.svg";
import logo from "./assets/logoci.png";
const HeroSection = () => {
  return (
    <div className="bg-gray-900 min-h-[100vh] pb-20 relative">
      <div className="bg-gray-800 py-[6px]">
        <div className="navbar w-[90%] m-auto py-[14px]">
          <div className="navbar-start">
            <img src={logo} className="w-[280px]" alt="" srcset="" />
          </div>

          <div className="navbar-end">
            <a className="btn btn-outline btn-secondary">Try the app</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-[70px] px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Invest with Canto Index
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              Invest smarter and achieve your financial goals with ease. Canto
              Index makes asset management simple, accessible, and more
              profitable for everyone. Automated trading strategy implementation
              for fund managers using our Low-code interface.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="https://app.cantoindex.xyz"
                  className="flex items-center justify-center w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="https:/cantoindex.xyz/docs"
                  className="flex items-center justify-center w-full px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-4">
            <img
              className="w-[380px] h-auto lg:max-w-lg"
              src={undraw}
              alt="Invest with Canto Index"
            />
          </div>
        </div>
      </div>
      <footer className=" absolute bottom-0 w-[100%]">
        <div className="container mx-auto px-8 py-4 text-center text-gray-600">
          © 2022 Canto Index | Built for Canto Community
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;
