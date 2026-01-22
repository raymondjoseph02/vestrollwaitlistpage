import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HowItWorks } from "@/components/sections/how-it-works";
// import { Workforce } from "@/components/sections/workforce";
import { Navbar } from "@/components/layout/navbar";
// import { Pricing } from "@/components/sections/pricing";
// import { FAQ } from "@/components/sections/faq";
import { ThirtyDays } from "@/components/sections/thirty-days";
import { Waitlist } from "@/components/sections/waitlist";
import { ThreeWays } from "@/components/sections/three-ways";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Workforce /> */}
      {/* <FAQ /> */}
      {/* <Pricing /> */}
      <Waitlist />
      <ThirtyDays />
      <ThreeWays />
      <Footer />
    </div>
  );
}
