import React from "react";
import Image from "next/image";
import Workforce1 from "../../assets/workforce1.png";
import Workforce2 from "../../assets/workforce2.png";
import Workforce3 from "../../assets/workforce3.png";
import Workforce4 from "../../assets/workforce4.png";
import ArrowRight from "../../assets/arrow-right.png";

export const Workforce = () => {
  const workforceTypes = [
    {
      id: 1,
      image: Workforce1,
      label: "Freelancers"
    },
    {
      id: 2,
      image: Workforce2,
      label: "Remote teams"
    },
    {
      id: 3,
      image: Workforce3,
      label: "Employers"
    },
    {
      id: 4,
      image: Workforce4,
      label: "Startups"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 md:mb-16 gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-900 leading-tight">
              Built for Every Modern Workforce
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-lg">
              Whether you&apos;re an employer, freelancer, remote team, or Web3 startup, our platform makes managing payments, contracts, and timesheets simple and seamless.
            </p>
          </div>
          <div className="flex justify-start lg:justify-start">
            <button className="bg-[#5E2A8C] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#4a2170] transition-colors duration-200">
              <span className="font-medium text-sm">Get started</span>
              <Image src={ArrowRight} alt="Arrow Right" width={20} height={20} />
            </button>
          </div>
        </div>

        {/* Desktop Layout (Hidden on Mobile) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Freelancers (Tall) */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src={workforceTypes[0].image}
                alt={workforceTypes[0].label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-white shadow-sm">{workforceTypes[0].label}</span>
              </div>
            </div>
          </div>

          {/* Middle Column - Stacked Images (Remote teams + Employers) */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Remote teams */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-[250px] lg:h-[286px]">
                <Image
                  src={workforceTypes[1].image}
                  alt={workforceTypes[1].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-white shadow-sm">{workforceTypes[1].label}</span>
                </div>
              </div>
            </div>

            {/* Employers */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative w-full h-[250px] lg:h-[286px]">
                <Image
                  src={workforceTypes[2].image}
                  alt={workforceTypes[2].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-white shadow-sm">{workforceTypes[2].label}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Startups (Tall) */}
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src={workforceTypes[3].image}
                alt={workforceTypes[3].label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
                <span className="text-sm font-medium text-white shadow-sm">{workforceTypes[3].label}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Visible only on Mobile/Tablet) */}
        <div className="grid lg:hidden grid-cols-2 gap-4">
          {/* Remote Teams - Full Width */}
          <div className="col-span-2 relative bg-white rounded-3xl overflow-hidden shadow-lg h-[250px] sm:h-[300px]">
            <Image
              src={workforceTypes[1].image}
              alt={workforceTypes[1].label}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-white">{workforceTypes[1].label}</span>
            </div>
          </div>

          {/* Freelancers - Half Width */}
          <div className="col-span-1 relative bg-white rounded-3xl overflow-hidden shadow-lg h-[200px] sm:h-[250px]">
            <Image
              src={workforceTypes[0].image}
              alt={workforceTypes[0].label}
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full whitespace-nowrap">
              <span className="text-xs sm:text-sm font-medium text-white">{workforceTypes[0].label}</span>
            </div>
          </div>

          {/* Startups - Half Width */}
          <div className="col-span-1 relative bg-white rounded-3xl overflow-hidden shadow-lg h-[200px] sm:h-[250px]">
            <Image
              src={workforceTypes[3].image}
              alt={workforceTypes[3].label}
              fill
              className="object-cover"
              sizes="50vw"
            />
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full whitespace-nowrap">
              <span className="text-xs sm:text-sm font-medium text-white">{workforceTypes[3].label}</span>
            </div>
          </div>

          {/* Employers - Full Width */}
          <div className="col-span-2 relative bg-white rounded-3xl overflow-hidden shadow-lg h-[250px] sm:h-[300px]">
            <Image
              src={workforceTypes[2].image}
              alt={workforceTypes[2].label}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-white">{workforceTypes[2].label}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
