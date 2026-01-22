import React from "react";

interface Feature {
    text: string;
}

interface PricingPlan {
    name: string;
    price: string;
    period: string;
    description: string;
    isPopular?: boolean;
    features: Feature[];
}

export const Pricing = () => {
    const plans: PricingPlan[] = [
        {
            name: "Starter Plan",
            price: "$0",
            period: "/mo",
            description: "Best for Beginners",
            isPopular: false,
            features: [
                { text: "Basic budgeting & expense tracking" },
                { text: "Secure transactions & bill payments" },
                { text: "Access to financial reports & insights" },
                { text: "Standard customer support" },
                { text: "Limited investment tools" }
            ]
        },
        {
            name: "Starter Plan",
            price: "$0",
            period: "/mo",
            description: "Best for Beginners",
            isPopular: true,
            features: [
                { text: "Basic budgeting & expense tracking" },
                { text: "Secure transactions & bill payments" },
                { text: "Access to financial reports & insights" },
                { text: "Standard customer support" },
                { text: "Limited investment tools" }
            ]
        },
        {
            name: "Starter Plan",
            price: "$0",
            period: "/mo",
            description: "Best for Beginners",
            isPopular: false,
            features: [
                { text: "Basic budgeting & expense tracking" },
                { text: "Secure transactions & bill payments" },
                { text: "Access to financial reports & insights" },
                { text: "Standard customer support" },
                { text: "Limited investment tools" }
            ]
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-10 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 md:p-10 min-h-[700px] flex flex-col ${plan.isPopular
                                    ? "bg-gradient-to-b from-[#5E2A8C] to-[#1A0B26] text-white md:scale-105 shadow-2xl"
                                    : "bg-gradient-to-b from-purple-50 to-purple-100 text-gray-900 shadow-lg"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                    <div className="bg-[#5E2A8C] px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-white text-sm font-semibold">Popular</span>
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8 pt-6">
                                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${plan.isPopular ? "text-white" : "text-gray-900"
                                    }`}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline mb-3">
                                    <span className={`text-5xl md:text-6xl font-bold ${plan.isPopular ? "text-white" : "text-gray-900"
                                        }`}>
                                        {plan.price}
                                    </span>
                                    <span className={`text-xl md:text-2xl ml-1 ${plan.isPopular ? "text-purple-200" : "text-gray-600"
                                        }`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <p className={`text-base ${plan.isPopular ? "text-purple-200" : "text-gray-600"
                                    }`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Get Started Button */}
                            <button
                                className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200 mb-5 ${plan.isPopular
                                        ? "bg-white text-purple-700 hover:bg-gray-50 shadow-md"
                                        : "bg-purple-700 text-white hover:bg-purple-800"
                                    }`}
                            >
                                Get Started
                            </button>

                            {/* No Credit Card Text */}
                            <p className={`text-center text-sm mb-8 ${plan.isPopular ? "text-purple-200" : "text-gray-600"
                                }`}>
                                No credit card required
                            </p>

                            {/* Divider */}
                            <div className={`h-px mb-8 ${plan.isPopular ? "bg-purple-500/50" : "bg-purple-300"
                                }`}></div>

                            {/* Features List */}
                            <div className="flex-grow">
                                <h4 className={`text-lg md:text-xl font-bold mb-6 ${plan.isPopular ? "text-white" : "text-gray-900"
                                    }`}>
                                    What's Included:
                                </h4>
                                <ul className="space-y-5">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-4">
                                            {/* Check Icon */}
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${plan.isPopular ? "bg-purple-500" : "bg-purple-600"
                                                }`}>
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className={`text-base leading-relaxed ${plan.isPopular ? "text-purple-100" : "text-gray-700"
                                                }`}>
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};