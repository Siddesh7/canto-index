import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InvestmentPage = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleInvestmentAmountChange = (event) => {
    setInvestmentAmount(event.target.value);
  };

  const handleInvestmentSubmit = (event) => {
    event.preventDefault();
    console.log(`Investment amount: ${investmentAmount}`);
  };

  const options = {
    title: {
      text: "Canto Index Fund Performance",
    },
    series: [
      {
        data: [
          29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
          95.6, 54.4,
        ],
        type: "line",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white">
        <div className="container mx-auto px-8 py-4">
          <nav className="flex items-center justify-between">
            <a href="#">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Canto Index logo"
                className="h-10"
              />
            </a>
            <div className="flex items-center">
              <a
                href="#"
                className="px-3 py-2 font-medium text-gray-900 rounded-lg hover:bg-gray-200"
              >
                Home
              </a>
              <a
                href="#"
                className="px-3 py-2 font-medium text-gray-900 rounded-lg hover:bg-gray-200"
              >
                About
              </a>
              <a
                href="#"
                className="px-3 py-2 font-medium text-gray-900 rounded-lg hover:bg-gray-200"
              >
                Contact
              </a>
            </div>
            <a
              href="#"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-8 py-20">
        <HighchartsReact highcharts={Highcharts} options={options} />
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900">
            Invest in Canto Index Fund
          </h2>
          <p className="text-xl text-center text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="mt-16 text-center" onSubmit={handleInvestmentSubmit}>
            <div className="flex items-center justify-center mb-4">
              <input
                type="text"
                className="w-64 px-4 py-2 mr-4 text-center border border-gray-400 rounded-lg"
                placeholder="Enter investment amount"
                value={investmentAmount}
                onChange={handleInvestmentAmountChange}
              />
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full"
              >
                Invest
              </button>
            </div>
          </form>
        </div>
        <div className="mt-16">
          <h3 className="text-lg font-bold text-gray-900">Fund Description</h3>
          <p className="text-base text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="mt-16">
          <h3 className="text-lg font-bold text-gray-900">Performance Fee</h3>
          <p className="text-base text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-8 py-4 text-center text-gray-600">
          © 2022 Canto Index
        </div>
      </footer>
    </div>
  );
};

export default InvestmentPage;
