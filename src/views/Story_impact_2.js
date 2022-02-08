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
                                THE HEALING SALON…
                              </p>
                            </a>
                          </div>
                          <p className="mb-4 text-base text-gray-700 md:text-lg">
                            Meet Mukeshimana Claudine; she is a wife, a mother
                            of four, a hairdresser, and of recent, a healing and
                            reconciliation practitioner! Rabagirana Ministries
                            (RM) got to know about Claudine a few months ago
                            when she enrolled for our annual Vocational training
                            school. Before taking the hairdressing class,
                            Claudine narrates how miserable life was; "I was
                            unemployed for as long as I can remember" she
                            begins. "My husband and I used to struggle daily to
                            provide for our kids their basic needs. It was a
                            very tough time. This however, is now all in the
                            past!" she concludes with a smile.
                          </p>
                          <div className="flex items-center font-serif">
                            After her completion of the course, Claudine didn't
                            take long before she landed her first job. She now
                            works at Magic Salon, which is also known by the
                            locals as the "healing salon." The nickname "healing
                            salon" came from the fact that people actually felt
                            better after spending time in that salon and
                            Claudine was the party behind that. After going
                            through the healing and reconciliation workshop,
                            Claudine recalls experiencing a deep healing of all
                            her wounds and she vowed to use whatever platform
                            God was going to give her to share her experience.
                            So, when the opportunity presented itself, she took
                            it. She would offer compassionate hearing to her
                            clients and allow them to share their hurts and
                            release their tears. Many women, old and young
                            alike, have now received the healing message, and
                            for majority of them, it changed their outlook on
                            life.
                          </div>
                        </div>

                        <div className="flex items-center">
                          It is now very clear that most Rwandans are not asking
                          if healing is possible but where can they find it? We
                          want to encourage every church, school, business, and
                          even homes to be used as a 'healing space!'
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
