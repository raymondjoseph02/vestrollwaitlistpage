"use client";

import React, { useState } from "react";
import Image from "next/image";
import FaqImage from "../../assets/faq.png";

interface FAQItem {
    question: string;
    answer: string;
}

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const faqs: FAQItem[] = [
        {
            question: "What Is This Platform Used For?",
            answer: "It's A Payroll And Workforce Management System That Allows Employers To Pay Employees In Fiat, Manage Timesheets, Create Contracts, And Track All Payment History."
        },
        {
            question: "Is This Platform For Both Employers And Employees?",
            answer: "Yes! Our platform serves both employers and employees. Employers can manage teams, track work, and process payments, while employees can submit timesheets, view contracts, and receive payments."
        },
        {
            question: "How Do Payment Methods Work?",
            answer: "Payments are processed securely through integrated payment gateways. You can connect your preferred wallet or bank account to enable instant fiat transactions globally."
        },
        {
            question: "Can Employees Submit Timesheets?",
            answer: "Absolutely! Employees can easily submit their timesheets through the platform, which employers can review, approve, and use for accurate payroll processing."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <div className="inline-block bg-gray-200 px-6 py-2 rounded-full mb-6">
                        <span className="text-sm md:text-base text-gray-700 font-medium">
                            Frequently Asked Questions
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                        Got Questions? We've Got Answers!
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left - Image with gradient background */}
                    <div className="relative">
                        <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-gray-300 to-purple-600">
                            <Image
                                src={FaqImage}
                                alt="FAQ Support"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right - FAQ Accordion */}
                    <div className="flex flex-col justify-between">
                        {/* FAQ Items */}
                        <div className="space-y-8 md:space-y-12">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="border-b border-gray-900 pb-6 md:pb-8"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full flex items-start justify-between text-left group py-2"
                                    >
                                        <h3 className="text-xl md:text-2xl lg:text-xl font-semibold text-gray-900 pr-6 leading-tight">
                                            {faq.question}
                                        </h3>
                                        <svg
                                            className={`w-6 h-6 md:w-7 md:h-7 flex-shrink-0 transition-transform duration-200 mt-1 ${openIndex === index ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>

                                    {/* Answer - only show if open */}
                                    {openIndex === index && (
                                        <div className="mt-4 md:mt-6 pr-8 md:pr-12">
                                            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <div className="mt-12 md:mt-16 flex justify-start md:justify-center">
                            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg flex items-center gap-2 transition-colors duration-200 font-medium text-base md:text-lg">
                                <span>Load More</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};