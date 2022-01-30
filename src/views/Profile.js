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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-md -mt-64">
              <div className="px-6">
                <section className="p-4 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
                  <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                      <img
                        src="https://source.unsplash.com/640x480/?1"
                        alt=""
                        className="h-80 dark:bg-coolGray-500 aspect-video"
                      />
                      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
                        <span className="text-xs uppercase dark:text-coolGray-400">
                          Join, it's free
                        </span>
                        <h3 className="text-3xl font-bold">
                          We're not reinventing the wheel
                        </h3>
                        <p className="my-6 dark:text-coolGray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor aliquam possimus quas, error esse quos.
                        </p>
                        <button type="button" className="self-start">
                          Action
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                      <img
                        src="https://source.unsplash.com/640x480/?2"
                        alt=""
                        className="h-80 dark:bg-coolGray-500 aspect-video"
                      />
                      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
                        <span className="text-xs uppercase dark:text-coolGray-400">
                          Join, it's free
                        </span>
                        <h3 className="text-3xl font-bold">
                          We're not reinventing the wheel
                        </h3>
                        <p className="my-6 dark:text-coolGray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor aliquam possimus quas, error esse quos.
                        </p>
                        <button type="button" className="self-start">
                          Action
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                      <img
                        src="https://source.unsplash.com/640x480/?3"
                        alt=""
                        className="h-80 dark:bg-coolGray-500 aspect-video"
                      />
                      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
                        <span className="text-xs uppercase dark:text-coolGray-400">
                          Join, it's free
                        </span>
                        <h3 className="text-3xl font-bold">
                          We're not reinventing the wheel
                        </h3>
                        <p className="my-6 dark:text-coolGray-400">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Dolor aliquam possimus quas, error esse quos.
                        </p>
                        <button type="button" className="self-start">
                          Action
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
