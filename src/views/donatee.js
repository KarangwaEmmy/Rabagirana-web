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
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                          20 Nov 2020
                        </p>
                        <div className="mb-3">
                          <a
                            href="/"
                            aria-label="Article"
                            className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                              What it means when a man falls from outer space
                            </p>
                          </a>
                        </div>
                        <p className="mb-4 text-base text-gray-700 md:text-lg">
                          Call it magical realism, call it realistic
                          fantasy—call it whatever you want, but Arimah's
                          playfully subversive style is wholly her own.
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
                          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            14 Jul 2020
                          </p>
                          <div className="mb-3">
                            <a
                              href="/"
                              aria-label="Article"
                              className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                Mascarpone cheese triangles taleggio
                              </p>
                            </a>
                          </div>
                          <p className="mb-4 text-base text-gray-700 md:text-lg">
                            Brie cheese triangles cheesecake. Cauliflower cheese
                            cheese and wine manchego bocconcini croque monsieur
                            queso airedale brie.
                          </p>
                          <div className="flex items-center">
                            <a href="/" aria-label="Author" className="mr-3">
                              <img
                                alt="avatar"
                                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                              />
                            </a>
                            <div>
                              <a
                                href="/"
                                aria-label="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Alex Stratulat
                              </a>
                              <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                            18 Mar 2020
                          </p>
                          <div className="mb-3">
                            <a
                              href="/"
                              aria-label="Article"
                              className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                                The quick, brown fox jumps over a lazy dog
                              </p>
                            </a>
                          </div>
                          <p className="mb-4 text-base text-gray-700 md:text-lg">
                            "A kitten, a nice little, sleek playful kitten, that
                            I can play with, and teach, and feed--and feed--and
                            feed!" I was not unprepared for this request, for I
                            had noticed how his pets went on increasing in size.
                          </p>
                          <div className="flex items-center">
                            <a href="/" aria-label="Author" className="mr-3">
                              <img
                                alt="avatar"
                                src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                              />
                            </a>
                            <div>
                              <a
                                href="/"
                                aria-label="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Susie the Cat
                              </a>
                              <p className="text-sm font-medium leading-4 text-gray-600">
                                Author
                              </p>
                            </div>
                          </div>
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
