import React from "react";
import donate from "assets/img/donate.jpg";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

function Donate() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap w-full mt-24 ml-6">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <a
              style={{ backgroundColor: "#7B6093" }}
              href="#"
              className="p-4 text-xl font-bold text-white "
            >
              Donate.
            </a>
          </div>
          <div className="flex flex-col justify-center px-8 pt-12 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Donating is caring!</p>

            <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
              <div className="px-4 py-4 sm:px-10">
                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-2 text-gray-500 bg-white">
                      Fill information below
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full space-y-6">
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-location"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Full name"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Email address"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-name"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-price"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Amount in rfw..."
                        />
                      </div>
                    </div>
                    <div>
                      <span className="block w-full rounded-full shadow-sm">
                        <button
                          type="button"
                          style={{ backgroundColor: "#7B6093" }}
                          className="py-2 px-4  
                           focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Send
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mb-24 mt-12 pl-0 mr-8">
          <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg p-24">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                BANK DETAILS
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Account name: Rabagirana Ministries
              </p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Mickael Poulaz
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Best techno</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    React JS
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    m.poul@example.com
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Salary</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    $10,000
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">About</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    To get social media testimonials like these, keep your
                    customers engaged with your social media accounts by posting
                    regularly yourself
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Donate;
