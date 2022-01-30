/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import Logo from "assets/img/logo.png";

export default function Navbar(props) {
  const history = createBrowserHistory();
  const router = history.location.pathname;
  console.log(router);
  const [ShowContactModal, setShowContactModal] = React.useState(false);
  const [ShowDonateModal, setShowDonateModal] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              <img src={Logo} alt="" height={50} width={200} />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-yellow-400 lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/"
                >
                  Home
                </a>
              </li>
              {/* <li>
                <Link href="/">
                  <a
                    className={`mr-4 my-auto hover:text-indigo-600 font-normal font-serif text-xl ${
                      router == "/" ? "text-indigo-600" : "text-brand-darkblue"
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li> */}
              <li className="flex items-center">
                <PagesDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-yellow-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/about"
                >
                  About us
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-yellow-400 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/stories"
                >
                  Stories of Impact
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="active:text-yellow-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  style={{ backgroundColor: "#7B6093" }}
                  onClick={() => setShowContactModal(true)}
                >
                  Contact us
                </button>
                {ShowContactModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
                        {/*header*/}

                        <div className="relative p-6 flex-auto">
                          <div className="flex flex-wrap justify-center ">
                            <div className="w-full  px-4">
                              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <div className="flex-auto p-5 lg:p-10">
                                  <h4 className="text-2xl font-semibold">
                                    Want to contact us?
                                  </h4>
                                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                    Complete this form and we will get back to
                                    you very soon.
                                  </p>
                                  <div className="relative w-full mb-3 mt-8">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="full-name"
                                    >
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="Full Name"
                                    />
                                  </div>

                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="email"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="Email"
                                    />
                                  </div>

                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="message"
                                    >
                                      Message
                                    </label>
                                    <textarea
                                      rows="4"
                                      cols="80"
                                      className="border-0  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                      placeholder="Type a message..."
                                    />
                                  </div>
                                  <div className="text-center mt-6">
                                    <button
                                      className=" text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition duration-150 ease-in-out ..."
                                      type="button"
                                      style={{ backgroundColor: "#7B6093" }}
                                    >
                                      Send Message
                                    </button>
                                  </div>
                                  <div className="flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                      className="text-red-500 background-bg-blueGray-600   font-bold uppercase  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowContactModal(false)}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </li>
              <li className="flex items-center">
                <a
                  className="active:text-yellow-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  href="/donate"
                  style={{ backgroundColor: "#FBB821" }}
                  // onClick={() => setShowDonateModal(true)}
                >
                  Donate
                </a>
                {ShowDonateModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
                        {/*header*/}

                        <div className="relative p-6 flex-auto">
                          <div className="flex flex-wrap justify-center ">
                            <div className="w-full  px-4">
                              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <div className="flex-auto p-5 lg:p-10">
                                  <h4 className="text-2xl font-semibold">
                                    Want to contact us?
                                  </h4>
                                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                    Complete this form and we will get back to
                                    you very soon.
                                  </p>
                                  <div className="relative w-full mb-3 mt-8">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="full-name"
                                    >
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="Full Name"
                                    />
                                  </div>

                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="email"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="email"
                                    >
                                      Amount
                                    </label>
                                    <input
                                      type="email"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="Amount in rfw."
                                    />
                                  </div>
                                  <div className="text-center mt-6">
                                    <button
                                      className=" text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition duration-150 ease-in-out ..."
                                      type="button"
                                      style={{ backgroundColor: "#7B6093" }}
                                    >
                                      Send Donation
                                    </button>
                                  </div>
                                  <div className="flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                      className="text-red-500 background-bg-blueGray-600   font-bold uppercase  text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      type="button"
                                      onClick={() => setShowDonateModal(false)}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*footer*/}
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
