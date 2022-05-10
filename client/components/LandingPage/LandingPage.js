import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col h-40 px-10 py-24 sm:p-24 items-center h-8/12 justify-between">
      <div className="flex flex-col items-center">
        <h1 className="sm:text-5xl text-4xl font-bold text-center">
          Welcome to <span className="text-indigo-600 ">CrytoHub</span>
        </h1>
        <p className=" text-lg sm:text-md text-gray-600 mt-4">
          Explore the world of cryptocurrencies
        </p>
      </div>
      <div className="w-8/12 rounded-md justify-center items-center sm:flex mt-8 text-center">
        <div className="inline-flex rounded-md shadow mb-5">
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Create account
          </a>
        </div>
        <div className="sm:ml-3 inline-flex rounded-md shadow mb-5">
          <a
            href="/login"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
