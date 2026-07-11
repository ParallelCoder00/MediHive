import React from "react";
import { Heart } from "lucide-react";
import { Search } from "lucide-react";
import { BriefcaseMedical } from 'lucide-react'
import { TruckElectric } from 'lucide-react'
import { ShieldHalf } from 'lucide-react'

function Hero() {
  return (
    <section className="w-full h-100 bg-linear-to-b from-[#f3e4ce] to-white flex items-center">      
      <div className="max-w-7xl flex flex-col gap-5 mx-auto ">
        <h2 className="flex font-medium w-max px-2 gap-3 rounded-full bg-[#e5d2b2]">
          {" "}
          <Heart className="text-green-800" /> Trusted by 10,000+ customers
        </h2>
        <h1 className="text-6xl font-semibold">
          Your Health, <br /> Our{" "}
          <span className="text-green-800">Priority</span>{" "}
        </h1>
        <h2>
          Order medicines online with ease and get them <br /> delivered fast at
          your doorstep.
        </h2>
        <div className="relative w-120">
          <input
            className="w-120 p-6 h-8 bg-white rounded-full outline-none focus:border-green-700 border border-zinc-600"
            placeholder="Search for medines,conditions..."
            type="text"
          />
          <button className="absolute right-1.5 cursor-pointer hover:scale-102 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-green-950 px-5 py-2 rounded-full hover:bg-green-700 transition">
            <Search size={18} className="text-white" />

            <span className="text-white font-semibold">Search</span>
          </button>
        </div>
        <div className="flex gap-9">
          <h3 className="flex gap-2"> <BriefcaseMedical size={22} className="text-green-900"/> Genuine Medicines</h3>
          <h3 className="flex gap-2"> <TruckElectric size={22} className="text-green-900"/> Fast Delivery</h3>
          <h3 className="flex gap-2"> <ShieldHalf size={22} className="text-green-900"/> Secure Payment</h3>
        </div>
      </div>
      <img src="../Public/Doctor_png.png" className="object-cover mr-10 max-w-7xl h-110"/>
    </section>
  );
}

export default Hero;
