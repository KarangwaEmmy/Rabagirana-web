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
                <section className="p-4 lg:p-8 dark:bg-coolGray-800 dark:text-coolGray-100">
                  <div class="max-w-lg mx-auto text-center">
                    <h2 class="text-3xl font-bold text-black sm:text-4xl">
                      Welcome to the collection of stories of Impact
                    </h2>
                    <hr className="border-1 border-gray-300 my-2" />
                    <p class="m-4 text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Suscipit ratione sed cumque molestiae dolores eaque odit
                      corporis accusamus reprehenderit laborum?
                    </p>
                  </div>
                  <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row">
                      <img
                        src="https://source.unsplash.com/640x480/?1"
                        alt=""
                        className="h-80 dark:bg-coolGray-500 aspect-video"
                      />
                      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
                        <h3 className="text-2xl font-bold">
                          FROM FIREWOOD TO GAS
                        </h3>
                        <span className="text-xs mt-1 uppercase dark:text-coolGray-400">
                          John doe
                        </span>
                        <p className="my-6 dark:text-coolGray-400">
                          Thank you, Rabagirana Ministries for the gas cooker.
                          Cooking over the traditional three-stone open fire was
                          a health hazard to me. It used to make me cough a lot
                          and the smoke would hurt my eyes too... giving me
                          teary eyes with a running nose. But this gas produces
                          no smoke and since I started using it, I do not cough
                          anymore.
                        </p>
                        <a
                          href="/stories"
                          style={{ backgroundColor: "#7B6093" }}
                          class="inline-flex items-center justify-center w-1/4 px-5 py-3 text-white rounded-full"
                        >
                          <span class="font-medium"> Read full story </span>

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
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-lg lg:flex-row-reverse">
                      <img
                        src="https://source.unsplash.com/640x480/?2"
                        alt=""
                        className="h-80 dark:bg-coolGray-500 aspect-video"
                      />
                      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
                        <h3 className="text-2xl font-bold">
                          THAT DAY AFTER A LONG TIME WE HAD FISH FOR SUPPER…
                        </h3>
                        <span className="text-xs mt-1 uppercase dark:text-coolGray-400">
                          Emmanuel
                        </span>
                        <p className="my-6 dark:text-coolGray-400">
                          Emmanuel made his first dozen of shopping bags around
                          mid-May. With the lockdown partly lifted, he managed
                          to take them to the market, and in less than a few
                          hours, they were all gone. “I honestly couldn’t
                          believe it.” He remarked. “That day, after a long time
                          we had fish for supper!” said a very jolly Emmanuel.
                          He now makes up to 200 shopping bags per day. “In an
                          average day, I now earn up to 20,000 francs (25$).
                        </p>
                        <a
                          href="/stories/story_2"
                          style={{ backgroundColor: "#7B6093" }}
                          class="inline-flex items-center justify-center w-1/2 px-5 py-3 text-white rounded-full sm:w-auto"
                        >
                          <span class="font-medium"> Read full story </span>

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
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-md lg:flex-row">
                      <img
                        src="https://source.unsplash.com/640x480/?3"
                        alt=""
                        className="h-80 dark:bg-coolGray-500 aspect-video"
                      />
                      <div className="flex flex-col justify-center flex-1 p-6 dark:bg-coolGray-900">
                        <h3 className="text-2xl font-bold">
                          THE HEALING SALON…
                        </h3>
                        <span className="text-xs  mt-1 uppercase dark:text-coolGray-400">
                          Claudine
                        </span>
                        <p className="my-6 dark:text-coolGray-400">
                          After her completion of the course, Claudine didn't
                          take long before she landed her first job. She now
                          works at Magic Salon, which is also known by the
                          locals as the "healing salon." The nickname "healing
                          salon" came from the fact that people actually felt
                          better after spending time in that salon and Claudine
                          was the party behind that.
                        </p>
                        <a
                          href="/stories/story_2"
                          style={{ backgroundColor: "#7B6093" }}
                          class="inline-flex items-center justify-center w-1/2 px-5 py-3 text-white rounded-full sm:w-auto"
                        >
                          <span class="font-medium"> Read full story </span>

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
                        </a>
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
