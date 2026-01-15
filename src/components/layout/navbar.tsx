import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight">
          Vestroll
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};
