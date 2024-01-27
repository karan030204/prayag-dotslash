import React from "react";

const Explore = () => {

    const handleChatWithBot =()=>{
        window.location.href = '/chatwithbot';
    }
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-28 py-12 mx-auto my-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            <img
              alt="testimonial"
              class="w-28 h-28 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
              src="https://dummyimage.com/302x302"
            />
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed  text-2xl">
            Hey $Name, What do you want to explore ?
          </p>
        </div>
        <div class="grid grid-cols-2 gap-0 -m-5 pl-32 ">
          <div class="p-2 lg:w-2/3 md:w-1/2 w-full cursor-pointer">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-2xl shadow-lg hover:shadow-none">
              <div class="flex-grow" onClick={handleChatWithBot}>
                <h2 class="text-gray-900 text-2xl title-font font-extralight text-center">
                  Chat with Bot
                </h2>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-2/3 md:w-1/2 w-full cursor-pointer">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-2xl shadow-lg hover:shadow-none">
              <div class="flex-grow" onClick={handleChatWithBot}>
                <h2 class="text-gray-900 text-2xl title-font font-extralight text-center">
                  Contributors Chat
                </h2>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-2/3 md:w-1/2 w-full cursor-pointer">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-2xl shadow-lg hover:shadow-none">
              <div class="flex-grow" onClick={handleChatWithBot}>
                <h2 class="text-gray-900 text-2xl title-font font-extralight text-center">
                  Live Connect
                </h2>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-2/3 md:w-1/2 w-full cursor-pointer">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-2xl shadow-lg hover:shadow-none">
              <div class="flex-grow" onClick={handleChatWithBot}>
                <h2 class="text-gray-900 text-2xl title-font font-extralight text-center">
                  I don't know
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
