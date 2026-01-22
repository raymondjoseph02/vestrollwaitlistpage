"use client";

import React, { useState } from "react";
import Image from "next/image";
import HeroImage from "../../assets/dash.png";
import HeroImage2 from "../../assets/wallet.png";
import HeroImage3 from "../../assets/employee.png";

export const Waitlist = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle waitlist signup
        console.log("Email submitted:", email);
    };

    return (
        <section className="py-16 md:py-24 px-4 bg-white bg-linear-to-b from-purple-50/30 to-purple-200/80 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                {/* Header with Email Input */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-gray-900">
                        Join the wait list
                    </h2>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <div className="relative flex-1 w-full sm:max-w-md">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address to get notification"
                                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#5E2A8C] hover:bg-[#4a2170] text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200"
                            >
                                Join
                            </button>
                        </div>
                    </form>
                </div>

                {/* Dashboard Preview with Overlapping Images */}
                <div className="relative mt-16 md:mt-24 max-w-7xl mx-auto px-4 md:px-8">
                    <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                        {/* Main hero image - centered */}
                        <div className="relative z-10 w-full max-w-6xl mx-auto">
                            <Image
                                src={HeroImage}
                                alt="Dashboard Preview"
                                width={1000}
                                height={1000}
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Bottom-left image - Wallet */}
                        <div className="absolute left-0 md:left-4 lg:left-[-80px] xl:left-[-100px] bottom-0 md:bottom-4 lg:bottom-[-40px] xl:bottom-[50px] z-20 hidden md:block">
                            <Image
                                src={HeroImage2}
                                alt="Wallet"
                                width={300}
                                height={300}
                                className="w-[150px] md:w-[200px] lg:w-[250px] h-auto drop-shadow-2xl rounded-lg"
                            />
                        </div>

                        {/* Top-right image - Employee */}
                        <div className="absolute right-0 md:right-4 lg:right-[-80px] xl:right-[-100px] top-0 md:top-4 lg:top-[-40px] xl:top-[50px] z-20 hidden md:block">
                            <Image
                                src={HeroImage3}
                                alt="Employee Management"
                                width={300}
                                height={300}
                                className="w-[150px] md:w-[200px] lg:w-[250px] h-auto drop-shadow-2xl rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
