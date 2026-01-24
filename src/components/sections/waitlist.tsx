"use client";

import React, { useState } from "react";
import Image from "next/image";
import MailIcon from "../../assets/mail.svg";
import waitlistImage from "../../assets/waitlist.svg";
import WalletImage from "../../assets/wallet.png";
import EmployeeImage from "../../assets/employee.png";

export const Waitlist = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle waitlist signup
        console.log("Email submitted:", email);
    };

    return (
        <section className="pt-16 md:pt-24 pb-0 px-4 bg-white bg-linear-to-b from-purple-50/30 to-purple-200/80 overflow-hidden">
            <div className="container mx-auto max-w-7xl h-full flex flex-col">
                {/* Header with Email Input */}
                <div className="text-left md:text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl mb-8 text-black font-regular">
                        Join the wait list
                    </h2>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="md:max-w-4xl md:mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center md:justify-center">
                            <div className="relative flex-1 w-full sm:max-w-2xl">
                                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                                    <Image src={MailIcon} alt="Mail" width={24} height={24} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter you email address to get notification"
                                    className="w-full pl-16 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white shadow-sm"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#5E2A8C] hover:bg-[#4a2170] text-white px-16 py-4 rounded-xl font-medium transition-colors duration-200 h-full"
                            >
                                Join
                            </button>
                        </div>
                    </form>
                </div>

                {/* Dashboard Preview with Overlapping Images */}
                <div className="relative mt-16 md:mt-24 max-w-6xl mx-auto px-4 flex-1 flex items-end">
                    <div className="relative flex items-end justify-center w-full">
                        {/* Main dashboard preview */}
                        <div className="relative z-10 w-full overflow-hidden rounded-t-[2.5rem] shadow-2xl border-t border-x border-purple-100 translate-y-4">
                            <Image
                                src={waitlistImage}
                                alt="Dashboard Preview"
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Floating Wallet Image - Left Bottom */}
                        <div className="absolute left-[-20px] md:left-[-40px] lg:left-[-80px] bottom-[10%] z-20 w-[180px] md:w-[280px] lg:w-[250px] transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={WalletImage}
                                alt="Wallet Card"
                                width={400}
                                height={400}
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Employee Image - Right Middle */}
                        <div className="absolute right-[-20px] md:right-[-40px] lg:right-[-80px] top-[10%] md:top-[15%] z-20 w-[200px] md:w-[300px] lg:w-[250px] transform hover:scale-105 transition-transform duration-300">
                            <Image
                                src={EmployeeImage}
                                alt="Employees Card"
                                width={400}
                                height={400}
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
