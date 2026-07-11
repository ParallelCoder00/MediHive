import { BadgeCheck, Quote, Star } from "lucide-react";
import React from "react";

function TestimonialCard({ testimonials }) {
  return (
    <div
      className="group relative w-80 rounded-2xl border border-green-950/15 p-6 shadow-lg shadow-green-950/10 transition-all duration-300 hover:-translate-y-2 hover:border-green-950/35 hover:shadow-xl hover:shadow-green-950/15"
    >
      <Quote aria-hidden="true" className="absolute right-5 top-5 h-10 w-10 text-green-950/10 transition-colors group-hover:text-green-950/20" />
      <div>
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md shadow-green-950/20"
            src={testimonials.image}
            alt={testimonials.name}
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-sm font-bold text-green-950">{testimonials.name}</h2>
              <BadgeCheck size={15} className="text-green-800" />
            </div>
            <h2 className="mt-0.5 text-xs font-medium text-zinc-500">{testimonials.location}</h2>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-1">
            {[...Array(testimonials.rating)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
        </div>
        <p className="mt-4 border-l-2 border-green-800/40 pl-4 text-sm leading-6 text-zinc-600">{testimonials.review}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
