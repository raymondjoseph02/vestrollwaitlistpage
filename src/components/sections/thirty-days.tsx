import React from "react";
import Image from "next/image";
import CheckIcon from "../../assets/check.svg";

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
                { text: "100% of business spend moved to Vestroll" },
                { text: "Intake-to-pay 8.5x more efficient" },
                { text: "Books close 75% faster" }
            ]
        }
    ];

    const timelineDays = ["Today", "Day 5", "Day 30"];
    const timelineDaysMobile = ["Today", "Day 5", "Day 30"];

    return (
        <section className="py-16 md:py-24 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-left md:text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-gray-900 leading-tight md:max-w-4xl md:mx-auto font-regular">
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
                    <div className="relative mb-16 max-w-5xl mx-auto">
                        <div className="flex justify-between items-end relative w-full">
                            {timelineDays.map((day, index) => (
                                <div key={index} className="flex flex-col items-center z-10 relative flex-1">
                                    {/* Timeline Line Segment */}
                                    {index < timelineDays.length - 1 && (
                                        <div className="absolute bottom-[6px] left-[50%] right-[-50%] h-0.5 bg-purple-200 z-0"></div>
                                    )}
                                    <span className="text-sm md:text-base text-gray-600 px-5 py-1 bg-purple-50 rounded-lg font-medium mb-3">{day}</span>
                                    <div className="w-3 h-3 bg-white border-2 border-purple-600 rounded-full relative z-10"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                        {timelineCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#FCF9FF] border-2 border-[#E9D3FF] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"
                            >
                                <h3 className="text-xl md:text-2xl mb-6 text-gray-900 font-medium">
                                    {card.title}
                                </h3>

                                <ul className="space-y-4">
                                    {card.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            {/* Check Circle Icon */}
                                            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center mt-0.5">
                                                <Image src={CheckIcon} alt="Check" width={24} height={24} />
                                            </div>
                                            <span className="text-sm text-gray-700 leading-relaxed">
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
                                    <h3 className="text-lg font-medium mb-4 text-gray-900">
                                        {card.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {card.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                                                    <Image src={CheckIcon} alt="Check" width={13} height={13} />
                                                </div>
                                                <span className="text-xs text-gray-600 leading-relaxed font-medium">
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
