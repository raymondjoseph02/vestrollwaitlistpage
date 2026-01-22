import React from "react";

interface ChecklistItem {
    text: string;
}

interface TimelineCard {
    title: string;
    items: ChecklistItem[];
}

export const ThirtyDays = () => {
    const timelineCards: TimelineCard[] = [
        {
            title: "Get started.",
            items: [
                { text: "Connect your ERP in five minutes" },
                { text: "Upload you policy in two minutes" },
                { text: "Issue yourself a card in one minute" }
            ]
        },
        {
            title: "Get Comfortable",
            items: [
                { text: "Connect to HRIS, email, and 200+ apps" },
                { text: "Set approvals and controls" },
                { text: "Issue cards to employees" }
            ]
        },
        {
            title: "Ask why you didn't switch years ago",
            items: [
                { text: "100% of business spend moved to ramp" },
                { text: "Intake-to-pay 8.5x more efficient" },
                { text: "Books close 75% faster" }
            ]
        }
    ];

    const timelineDays = ["Today", "Day 6", "Day 30"];

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 leading-tight max-w-4xl mx-auto">
                        Here's what you get done with Vestroll in just 30 days
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-[#5E2A8C] hover:bg-[#4a2170] text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200">
                        Join the wait list
                    </button>
                </div>

                {/* Timeline */}
                <div className="relative mb-16 max-w-5xl mx-auto">
                    <div className="flex justify-between items-end relative">
                        {timelineDays.map((day, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-sm md:text-base text-gray-600 px-5 py-1 bg-purple-50 rounded-lg font-medium mb-3">{day}</span>
                                <div className="w-3 h-3 bg-white border-2 border-purple-600 rounded-full"></div>
                            </div>
                        ))}
                        {/* Timeline Line - runs through the center of dots */}
                        <div className="absolute bottom-[6px] left-0 right-0 h-0.5 bg-purple-200"></div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {timelineCards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-purple-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"
                        >
                            <h3 className="text-xl md:text-2xl mb-6 text-gray-900">
                                {card.title}
                            </h3>

                            <ul className="space-y-4">
                                {card.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-3">
                                        {/* Check Circle Icon */}
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center mt-0.5">
                                            <svg className="w-3 h-3 text-gray-600" fill="gray" stroke="gray" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-base text-gray-700 leading-relaxed">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
