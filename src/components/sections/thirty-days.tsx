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
    // Mobile specific labels based on image ("Today", "Day 5", "Day 30") - sticking to array but maybe adjusting text if needed. User image says "Day 5" but code has "Day 6". Sticking to code unless asked. User image says "Day 5", I will update to match image? No, user said "This is how 30 days section should look", implies visual structure. I will keep "Day 6" unless I see "Day 5" in the image explicitly... yes I see "Day 5" in the image. I'll switch to Day 5 to be safe.
    const timelineDaysMobile = ["Today", "Day 5", "Day 30"];

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-left md:text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 leading-tight md:max-w-4xl md:mx-auto">
                        Here's what you get done with Vestroll in just 30 days
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-[#5E2A8C] hover:bg-[#4a2170] text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200 md:mx-auto">
                        Join the wait list
                    </button>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                    {/* Timeline */}
                    <div className="relative mb-16 max-w-5xl mx-auto px-1.5">
                        <div className="flex justify-between items-end relative">
                            {timelineDays.map((day, index) => (
                                <div key={index} className="flex flex-col items-center z-10 relative">
                                    <span className="text-sm md:text-base text-gray-600 px-5 py-1 bg-purple-50 rounded-lg font-medium mb-3">{day}</span>
                                    <div className="w-3 h-3 bg-white border-2 border-purple-600 rounded-full"></div>
                                </div>
                            ))}
                            {/* Timeline Line - connects dot centers, doesn't extend beyond */}
                            <div className="absolute bottom-[6px] left-1.5 right-1.5 h-0.5 bg-purple-200 z-0"></div>
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

                {/* Mobile Layout */}
                <div className="md:hidden relative">
                    {/* Continuous vertical line - Positioned to center of w-16 (64px) column is at 32px */}
                    <div className="absolute top-4 bottom-12 left-8 w-0.5 bg-purple-200 -translate-x-1/2 z-0"></div>

                    <div className="flex flex-col gap-8 relative z-10">
                        {timelineCards.map((card, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                {/* Timeline Marker Column - Fixed width 16 (64px) to center content */}
                                <div className="flex flex-col items-center w-16 flex-shrink-0 pt-0">
                                    <span className="text-xs font-bold text-gray-600 bg-purple-50 px-2 py-1.5 rounded-lg border border-purple-100 relative z-20 w-auto text-center min-w-[60px]">
                                        {timelineDaysMobile[index]}
                                    </span>
                                </div>

                                {/* Card Content */}
                                <div className="bg-purple-50 rounded-2xl p-6 flex-1 border border-purple-100/50 hover:shadow-md transition-shadow">
                                    <h3 className="text-lg font-bold mb-4 text-gray-900">
                                        {card.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {card.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mt-0.5">
                                                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-sm text-gray-600 leading-relaxed font-medium">
                                                    {item.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
