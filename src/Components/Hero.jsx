import React from "react";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-6xl text-4xl font-large title-font mb-4 text-gray-900">
            Githubify
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Understanding Codebase made simpler
          </p>
        </div>
        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div class="relative flex-grow w-full">
            
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-gray-100 bg-opacity-50 rounded-2xl border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            //   onSubmit={window.location.href = '/explore'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
