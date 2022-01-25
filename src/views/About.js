import { Carousel } from "react-carousel-minimal";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import About from "assets/img/about.jpeg";
import Team from "assets/img/team.jpg";
import "react-multi-carousel/lib/styles.css";

export default function About() {
	return (
		<>
			<Navbar transparent />
			<main className="profile-page">
				<section className="relative block h-500-px">
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage: `url(${Team})`,
							backgroundPosition: "75% 35%",
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
				<section className="relative py-40 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="text-center mt-4">
									<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
										Rabagirana Ministries
									</h3>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<div className="w-full lg:w-10/12">
											<div className="py-20 2xl:px-0 lg:px-12 px-4 2xl:mx-auto 2xl:container bg-gray-50">
												<div className="items-center justify-between w-full bg-gray-50">
													<div className="">
														<h1
															role="heading"
															className="focus:outline-none font-bold md:text-6xl text-4xl leading-tight text-gray-800"
														>
															<span className="font-normal italic">
																{" "}
																Souls Can Shine As Bright As Stars{" "}
															</span>
														</h1>
														<p
															role="contentinfo"
															className="focus:outline-none text-base leading-6 mt-8 text-gray-600 mx-10"
														>
															There is no readily available road map to
															reconciliation. There is no quick fix or simple
															prescription for healing the wounds and divisions
															of a society in the aftermath of sustained
															violence. Developing trust and understanding
															between former adversaries is an exceedingly tough
															task. It is, however, one that must be addressed
															as part of the process of establishing a lasting
															peace. Examining the painful past, acknowledging
															and understanding it, and, most importantly,
															transcending it together, is the only way to
															ensure that it does not – and cannot – happen
															again!
														</p>
														<div className="mt-10 mx-10">
															<button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
																View Programs
																<svg
																	className="ml-8"
																	width={45}
																	height={40}
																	viewBox="0 0 45 40"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
																		fill="#1F2937"
																	/>
																	<path
																		d="M1 20H29"
																		stroke="#1F2937"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																	<path
																		d="M21 28L29 20"
																		stroke="#1F2937"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																	<path
																		d="M21 12L29 20"
																		stroke="#1F2937"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</button>
														</div>
													</div>
													<div className="w-full">
														<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
															Our Vision
														</h3>
														<div className="w-full flex mt-8">
															<p
																role="contentinfo"
																className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10 mx-10 w-1/2"
															>
																In Rwanda we have come a long way down the road
																of reconciliation, but our journey is far from
																complete. Reconciliation is a long-term process
																and it must – and will – continue for many years
																to come. Nevertheless, we have made a good
																start. For us, reconciliation is centered on
																truth: the need to learn the truth about the
																atrocities of the past in order to prevent them
																from occurring again. That, in essence, is the
																purpose of reconciliation. Without it, people
																have no sense of safety, no trust, no confidence
																in the future. The aim must be to 'create a
																common future out of a divided past’ as we shall
																see from the story of Eliya and Gaston
															</p>
															<div className="w-1/2">
																<img
																	src={About}
																	width={200}
																	alt="Purple flowers on a book"
																	className="w-full"
																/>
																{/* <div className="flex items-center mt-8">
                                <p
                                  role="contentinfo"
                                  className="text-xl focus:outline-none font-semibold leading-5 text-gray-700"
                                >
                                  Picture description
                                </p>
                                <p
                                  role="contentinfo"
                                  className="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-700"
                                >
                                  Specification
                                </p>
                              </div> */}
															</div>
														</div>
													</div>

													<div className="w-full">
														<h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mt-4">
															Our Mission
														</h3>
														<div className="w-full flex mt-8">
															<div className="w-1/2">
																<img
																	src={About}
																	width={200}
																	alt="Purple flowers on a book"
																	className="w-full"
																/>
																{/* <div className="flex items-center mt-8">
                                <p
                                  role="contentinfo"
                                  className="text-xl focus:outline-none font-semibold leading-5 text-gray-700"
                                >
                                  Picture description
                                </p>
                                <p
                                  role="contentinfo"
                                  className="text-xl focus:outline-none italic font-italic leading-5 pl-2 text-gray-700"
                                >
                                  Specification
                                </p>
                              </div> */}
															</div>
															<p
																role="contentinfo"
																className=" focus:outline-none text-base leading-6 mb-8 text-gray-600 md:mt-0 mt-10 mx-10 w-1/2"
															>
																In Rwanda we have come a long way down the road
																of reconciliation, but our journey is far from
																complete. Reconciliation is a long-term process
																and it must – and will – continue for many years
																to come. Nevertheless, we have made a good
																start. For us, reconciliation is centered on
																truth: the need to learn the truth about the
																atrocities of the past in order to prevent them
																from occurring again. That, in essence, is the
																purpose of reconciliation. Without it, people
																have no sense of safety, no trust, no confidence
																in the future. The aim must be to 'create a
																common future out of a divided past’ as we shall
																see from the story of Eliya and Gaston
															</p>
														</div>

														{/* <Carousel>
															<div>Item 1</div>
															<div>Item 2</div>
															<div>Item 3</div>
															<div>Item 4</div>
														</Carousel> */}
													</div>
												</div>
											</div>
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
