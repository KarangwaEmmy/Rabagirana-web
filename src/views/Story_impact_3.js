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
                  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
                      <div className="lg:col-span-2">
                        <div className="mb-3">
                          <a
                            href="/"
                            aria-label="Article"
                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl xl:text-3xl">
                              What it means when a man falls from outer space
                            </p>
                          </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                          Call it magical realism, call it realistic
                          fantasy—call it whatever you want, but Arimah's
                          playfully subversive style is wholly her own.
                        </p>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                          20 Nov 2020
                        </p>
                        <div className="flex items-center">
                          <a href="/" aria-label="Author" className="mr-3">
                            <img
                              alt="avatar"
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                              className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                          </a>
                          <div>
                            <a
                              href="/"
                              aria-label="Author"
                              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              Petru Vîrtos
                            </a>
                            <p className="text-sm font-medium leading-4 text-gray-600">
                              Author
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-8 lg:col-span-3">
                        <div>
                          <div className="mb-3">
                            <a
                              href="/"
                              aria-label="Article"
                              className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-1xl">
                                FROM FIREWOOD TO GAS…
                              </p>
                            </a>
                          </div>
                          <p className="mb-4 text-base text-gray-700 md:text-lg">
                            Emmanuel Ntirushwamaboko is just one in a million of
                            people who was negatively impacted by the pandemic.
                            He lost his livelihood, which was to carry goods and
                            people on a borrowed bicycle once the lockdown was
                            effected
                          </p>
                          <div className="flex items-center font-serif">
                            For the first time in my life, I didn’t know how I
                            was going to feed my wife and two kids. We were just
                            a week in to the lockdown, and all that I had set
                            aside was gone. Sometimes, either my wife or I would
                            go through a forced fast just to make sure there is
                            food for the kids.” The emotional Emmanuel recalls.
                            It was still in this state of despair that Emmanuel
                            received a call from the local authorities
                            requesting him to go and pick food supplies from
                            Rabagirana Ministries. Attached to the supplies
                            provided, was some money that they were free to use
                            to meet other critical needs. Emmanuel decided to
                            use this money to start a business. The business
                            idea he came up with was to make shopping bags.
                            Since his wife already had a previous training in
                            tailoring, he used the money to rent a refurbished
                            sewing machine, and his wife taught him the basics
                            of tailoring. It took him almost a month, but he
                            eventually mastered the skill. <br />
                            Emmanuel made his first dozen of shopping bags
                            around mid-May. With the lockdown partly lifted, he
                            managed to take them to the market, and in less than
                            a few hours, they were all gone. “I honestly
                            couldn’t believe it.” He remarked. “That day, after
                            a long time we had fish for supper!” said a very
                            jolly Emmanuel. He now makes up to 200 shopping bags
                            per day. “In an average day, I now earn up to 20,000
                            francs (25$). That is the amount I used to make in a
                            month!” With his new found success, Emmanuel was
                            able move his family from a single bedroomed house
                            to a three bedroomed house. Now one of the rooms
                            functions as his place of work
                          </div>
                        </div>

                        <div className="flex items-center">
                          Just like any other entrepreneur out there, Emmanuel
                          dreams of expanding his business. However, one major
                          challenge he faces is the means of transport. Now that
                          transport fares have hiked as a result of the ongoing
                          pandemic, transporting large quantities of shopping
                          bags from his home to the market is very costly.
                          Emmanuel plans to overcome this challenge by buying a
                          bicycle. The long-term goal however is to buy his own
                          machines and employ people in the business.
                        </div>
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
