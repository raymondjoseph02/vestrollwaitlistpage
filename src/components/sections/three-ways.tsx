import React from "react";

interface Benefit {
    title: string;
    description: string;
    imagePosition: "left" | "right";
}

export const ThreeWays = () => {
    const benefits: Benefit[] = [
        {
            title: "Set Policies That Enforce Themselves.",
            description:
                "Customize Approval Flows, Pre-Approve Funds, Issue Cards With Built-In Controls And Stop Out-Of-Policy Spending.",
            imagePosition: "right",
        },
        {
            title: "Triple Checks Are Done For You.",
            description:
                "Ramp Keeps An Eye Out 24/7 To Catch Any Out-Of-Policy Transactions, Uncover Errors, And See Where You're Overspending.",
            imagePosition: "left",
        },
        {
            title: "Leave The Busywork To Us.",
            description:
                "Keep Everyone Focused On The Big Picture, And Let Ramp Automate The Rest—Expenses, Accounting, Compliance, And More.",
            imagePosition: "right",
        },
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-left md:text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 text-gray-900 leading-tight md:max-w-4xl md:mx-auto">
                        Three ways we save your company both time and money
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 md:max-w-2xl md:mx-auto">
                        There are many more, but we thought we'd easy you into it
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="space-y-16 md:space-y-24">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${benefit.imagePosition === "left" ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Text Content */}
                            <div
                                className={`${benefit.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
                                    }`}
                            >
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>

                            {/* Image Placeholder */}
                            <div
                                className={`${benefit.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
                                    }`}
                            >
                                <div className="w-full h-[300px] md:h-[350px] bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
