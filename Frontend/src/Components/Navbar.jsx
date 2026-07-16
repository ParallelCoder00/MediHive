import React, { useState } from "react";
import { CarTaxiFront, Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" sticky top-0 z-50 shadow-md shadow-balck backdrop-blur-md bg-[#F5E8D3]/70">
      <div className="flex h-15 max-w-7xl mx-auto items-center">
        <div className="flex cursor-pointer">
          <img src="/Mainlogo.png" className="h-17 w-17" />
          <div className="-ml-2">
            <h1 className="font-bold text-xl text-center mt-2.5 tracking-wider text-green-950">
              MediHive
            </h1>
            <h4 className="text-xs tracking-tight font-medium  text-zinc-600">
              Your Health, Our Priority
            </h4>
          </div>
        </div>
        <ul className="max-w-7xl mx-auto flex gap-2 font-light text-md">
          <li className="cursor-pointer px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full hover:underline hover:underline-offset-2">
            Home
          </li>
          <li className="cursor-pointer px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full hover:underline hover:underline-offset-2">
            Medicines
          </li>
          <li className="cursor-pointer px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full hover:underline hover:underline-offset-2">
            Categories
          </li>
          <li className="cursor-pointer px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full hover:underline hover:underline-offset-2">
            About Us
          </li>
          <li className="cursor-pointer px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full hover:underline hover:underline-offset-2">
            ContactUs
          </li>
        </ul>
        <div className="flex items-center ">
          <div className="max-w-7xl relative mx-auto mr-2">
            <Search
              size={18}
              className="absolute cursor-pointer text-gray-700 top-2 right-3"
            />
            <input
              className="border border-zinc-400 outline-0 text-zinc-600 focus:border-green-800 bg-white rounded-full px-8 py-1 "
              type="text"
              placeholder="Search medicines..."
            />
          </div>
          <div className="flex items-center px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full cursor-pointer  gap-1">
            <ShoppingCart size={20} className="fill-green-800 text-green-900"/>
            <h3 className="font-medium text-md">Cart</h3>
          </div>
          <div className="relative">
            {/* Account */}
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center px-3 py-2 hover:bg-green-900/20 hover:opacity-80 hover:rounded-full cursor-pointer  gap-1"
            >
              <User size={20} className="fill-green-800 text-green-900"/>
              <h3 className="font-medium">Account</h3>
              <ChevronUp
                size={20}
                className={`mt-1 text-black transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </div>
            {/* Dropdown */}
            {open && <ul className="absolute bg-black/90 opacity-80 rounded-2xl border-2 p-3 border-green-300 text-white right-0 mt-2">
              <div className="mb-2 text-center">
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">Sign In</li>
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">Register</li>
              </div>
              <hr />
              <div className="mb-2 mt-2 text-center">
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">My Orders</li>
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">Wishlist</li>
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">Prescription</li>
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">Addresses</li>
              </div>
              <hr />
              <div className="text-center mt-2">
              <li className="p-2 cursor-pointer hover:bg-green-500/40 hover:rounded-full hover:opacity-100 text-white">Help</li>
              </div>
            </ul>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
