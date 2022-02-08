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
                            The month was July, the day was a Saturday, and the
                            time was half-past midday. A joyous Keza Angelique,
                            a single mother of three, is humming to a hymn from
                            the radio as she warms ‘isombe’ (cassava leaves) for
                            lunch, using her newly purchased gas cooker. With a
                            green colorful ‘kitenge’ (wrapper) around her waist
                            and a bandana of the same color covering her head,
                            she turns to us and asks, “do you want to know the
                            secret ingredient to my tasty isombe?” “Love!” my
                            colleague immediately yelled. “No. Love doesn’t make
                            my isombe sweet. What’s wrong with you?” She replied
                            playfully, making us all burst into laughter. After
                            she was done warming the isombe, she got ready to
                            prepare ‘ugali’ (sorghum flour). She sprinkled the
                            flour into the boiling water while briskly stirring
                            it with a cooking stick to make it thicker. In a
                            very short time, the ugali was ready and it was time
                            to eat. As we sat by the dining table to devour the
                            tasty meal that lay helplessly before us, Keza
                            signaled that she wanted to say something. My
                            colleague and I immediately had one of those
                            telepathic communications, questioning Keza’s poor
                            timing. “One doesn’t give speeches before the
                            meal…speeches usually take place after the meal!" he
                            seemed to say. "Her house, her rules I guess," I
                            signaled back. So, we sat quietly and listened to
                            her.
                          </p>
                          <div className="flex items-center font-serif">
                            “Thank you, Rabagirana Ministries for the gas
                            cooker. Cooking over the traditional three-stone
                            open fire was a health hazard to me. It used to make
                            me cough a lot and the smoke would hurt my eyes
                            too... giving me teary eyes with a running nose. But
                            this gas produces no smoke and since I started using
                            it, I do not cough anymore.”
                          </div>
                        </div>

                        <div className="flex items-center">
                          Keza is one of many community members positively
                          impacted by the creation care program of Rabagirana
                          Ministries. Earlier last month we partnered with some
                          local cooperatives to purchase gas cookers, and build
                          wood-saving, earth-block stoves popularly known as the
                          energy-saving stoves for the members of the community.
                          As compared to the widely used traditional three-stone
                          open hearth, these alternatives are already
                          transforming the way people cook in rural communities
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
