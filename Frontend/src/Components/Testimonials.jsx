import React from "react";
import testimonials from "../Data/testimonial";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto mt-8 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-green-300/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-200/20 blur-3xl"></div>
      <div className="relative z-10">
      <div className="ml-5 mt-4 mb-6">
        <h3 className="text-[13px] text-zinc-700 font-semibold">
          TRUSTED USERS
        </h3>
        <h1 className="text-2xl font-bold text-green-950">Reviews</h1>
      </div>
      <div className="flex gap-8 justify-center">
        {testimonials.map((testimonials) => (
          <TestimonialCard key={testimonials.id} testimonials={testimonials} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default Testimonials;
