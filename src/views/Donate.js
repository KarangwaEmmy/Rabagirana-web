import React, { useState } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/MainFooter.js";

export default function Profile() {
  const [showpass, setShowPass] = useState(false);
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-purpleGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-purpleGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-md -mt-64">
              <div className="px-6">
                <div className="lg:flex justify-center lg:w-3/4 mx-auto my-8">
                  <div className="bg-white lg:w-2/3 lg:rounded-l-lg mx-3 px-6 lg:px-0 lg:mx-0 lg:px-10">
                    <div className="text-3xl text-gray-700 py-6">
                      Donation Form
                    </div>
                    <hr className="-mx-20" />
                    <div className="py-8">
                      <div className="flex mb-4">
                        <span className="flex items-center justify-center block rounded-full border border-purple-700 h-6 w-6 text-xs font-bold border-purple-500 mr-3">
                          1
                        </span>
                        <span className="font-bold text-gray-800">
                          Personal Information
                        </span>
                      </div>
                      <div className="lg:flex mb-2 -mx-1">
                        <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                          <div className="px-1">
                            <label className="text-gray-600 font-light">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                            />
                          </div>
                        </div>
                        <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                          <div className="px-1">
                            <label className="text-gray-600 font-light">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/3">
                        <div className="px-1">
                          <label className="text-gray-600 font-light">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="-mx-20" />
                    <div className="py-8">
                      <div className="flex mb-4">
                        <span className="flex items-center justify-center block rounded-full border border-purple-700 h-6 w-6 text-xs font-bold border-purple-800 mr-3">
                          2
                        </span>
                        <span className="font-bold text-gray-800">
                          Donate Information
                        </span>
                      </div>
                      <div className="lg:flex mb-2 -mx-1">
                        <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                          <div className="px-1">
                            <label className="text-gray-600 font-light">
                              Amount
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                            />
                          </div>
                        </div>
                        <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                          <div className="px-1">
                            <label className="text-gray-600 font-light">
                              Period
                            </label>
                            <input
                              type="text"
                              className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-2/3">
                        <div className="px-1">
                          <label className="text-gray-600 font-light">
                            Location
                          </label>
                          <input
                            type="email"
                            className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="-mx-20" />
                    <div className="flex justify-end py-8">
                      <button
                        type="submit"
                        style={{ backgroundColor: "rgb(107,34,168)" }}
                        class="inline-flex items-center justify-center w-full px-5 py-3 text-white rounded-full sm:w-auto"
                      >
                        <span class="font-medium"> Send </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 ml-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="bg-purple-900 lg:w-2/3  lg:rounded-r-lg mx-6 px-6 lg:mx-0 lg:px-0">
                    <div className="px-8">
                      {/* <div className="font-bold text-gray-200 pt-8 pb-3">
                        Donate
                      </div> */}
                      <div className="tracking-wider mt-6">
                        <span className="font-light items-center text-3xl -mx-1 text-gray-100">
                          Bank details
                        </span>
                        <hr className="border-1 border-gray-500 my-6" />
                      </div>

                      <div className="italic text-gray-300 py-2"></div>
                      <div className="mt-6">
                        <div className="">
                          <div className="flex mb-1">
                            <p className="text-gray-300 mr-2">
                              <span
                                className=" rounded-md material-icons p-1"
                                style={{ fontSize: "15px" }}
                              >
                                Account name
                              </span>
                            </p>
                            <p className="text-gray-300">
                              : Rabagirana Ministries
                            </p>
                          </div>
                          <div className="flex mb-1">
                            <p className="text-gray-300 mt-2">
                              <span
                                className=" rounded-md material-icons p-1"
                                style={{ fontSize: "15px" }}
                              >
                                Name of Bank
                              </span>
                            </p>
                            <p className="text-gray-300 mt-2 mr-2">
                              : Bank of Kigali
                            </p>
                          </div>
                          <div className="flex mb-1">
                            <p className="text-gray-300 mt-2">
                              <span
                                className=" rounded-md material-icons p-1"
                                style={{ fontSize: "15px" }}
                              >
                                Account number
                              </span>
                            </p>
                            <p className="text-gray-300 mt-2">: 100070651119</p>
                          </div>
                          <div className="flex mb-1">
                            <p className="text-gray-300 mt-2">
                              <span
                                className=" rounded-md material-icons p-1"
                                style={{ fontSize: "15px" }}
                              >
                                Swift code
                              </span>
                            </p>
                            <p className="text-gray-300 mt-2">: BKIGRWRW</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-gray-300">
                        <span className="block">
                          Adress{" "}
                          <strong className="text-white font-bold"> : </strong>{" "}
                          Village: Kabeza, Cell Gitaraga, Sector: Masaka,
                          District: Kicukiro, City: Kigali
                        </span>
                        <div className="mb-4" />
                        <a href="#" className="text-gray-100 m-2 font-bold ">
                          FOR OUR FRIENDS FROM USA AND CANADA
                        </a>
                        <hr className="border-1 border-gray-500 my-2" />
                      </div>
                      {/* <hr className="border-1 border-gray-500 my-10" /> */}
                      <div className="mt-6 space-y-1 text-gray-100 font-light">
                        Make your check out to:{" "}
                        <strong className="font-bold">
                          Le Rucher/Mercy Ministries
                        </strong>{" "}
                        and enclose a note saying it is{" "}
                        <strong className="font-bold">for Rabagirana</strong>.
                        Then send to Renee Schudel, 13890 Indio Drive,
                        Sloughhouse, CA 95683.
                      </div>
                      {/* <div className="flex items-center justify-between my-4">
                        <div className="w-16">
                          <img
                            className="border border-gray-500 p-2 w-12 h-12 rounded-full"
                            src="http://web2tailwind.com/assets/img/logo-white.png"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-300 font-semibold">
                            Web2tailwind.com
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
