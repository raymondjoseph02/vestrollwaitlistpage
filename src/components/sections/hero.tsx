import React from "react";
import { Button } from "../common/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Payroll & Financial Management for Global Teams
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Vestroll simplifies cross-border payments, compliance, and employee
          benefits so you can focus on scaling your business anywhere in the
          world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Join the Waitlist</Button>
          <Button variant="outline" size="lg">
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
};
