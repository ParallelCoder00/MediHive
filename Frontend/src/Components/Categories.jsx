import React from "react";
import category from "../Data/category";
import Categorycard from "./Categorycard";
import { MoveRight } from "lucide-react";

function Categories() {
  return (
    <section className="max-w-7xl mx-auto mt-12 flex flex-col justify-center gap-8">
      <div>
        <h3 className="text-xs font-semibold tracking-wider text-zinc-600">
          BROWSE BY CATEGORY
        </h3>
        <h1 className="text-2xl font-bold text-green-950">Shop By Category</h1>
        <h3 className="flex group ml-270 justify-center items-center -mt-6 rounded-full cursor-pointer bg-green-100 border border-green-800 text-green-950 font-semibold text-[13px]">
          View all categories
          <MoveRight
            size={20}
            className="mt-0.5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </h3>
      </div>

      <div className="flex text-center gap-6">
        {category.map((category) => (
          <Categorycard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
