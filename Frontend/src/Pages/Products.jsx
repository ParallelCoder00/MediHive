import {
  ChevronRight,
  FileText,
  GalleryVerticalEnd,
  HeartPulse,
  House,
  Leaf,
  Pill,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductBar from "../Components/ProductBar";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { dummyProducts } from "../Data/productPage";

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    { name: "All", icon: GalleryVerticalEnd },
    { name: "OTC", icon: Pill },
    { name: "Prescription", icon: FileText },
    { name: "Supplements", icon: HeartPulse },
    { name: "Ayurvedic", icon: Leaf },
    { name: "Homopathy", icon: Stethoscope },
  ];

  return (
    <main className="">
      <section className="flex justify-between px-28 items-center h-55 bg-linear-to-b from-[#f5e8d3] to-white" >
        <div className=" px-6 ">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm font-medium text-zinc-600">
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center font-medium gap-1.5 transition-colors hover:text-green-900"
                >
                  <House size={15} aria-hidden="true"/>
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={16} className="text-zinc-400" />
              </li>
              <li aria-hidden="true" className="text-green-900 cursor-pointer">
                All Products
              </li>
              
            </ol>
          </nav>
          <h1 className="heading-font tracking-wide mt-3 text-6xl text-green-950 mb-2">All Products</h1>
          <p className="text-zinc-800 font-extralight text-sm">Find the best medicines & healthcare for you</p>
        </div>
        <img className="w-215 h-57 object-cover mt-4" src="../Public/producpageimage.png" alt="" />
      </section>
      <ProductBar/>
      <div className="flex p-2 mt-5 max-w-7xl mx-auto list-none justify-around">
        {categories.map(({ name, icon: Icon }) => (
          <li
            key={name}
            onClick={() => setActiveCategory(name)}
            className={`p-2 font-medium text-sm px-12 shadow rounded-md cursor-pointer flex items-center gap-3 ${
              activeCategory === name ? "bg-green-900 text-white" : "bg-white text-green-950 hover:bg-zinc-200"
            }`}
          >
            <Icon size={18} />
            {name}
          </li>
        ))}
      </div>
      <section className="grid max-w-7xl mx-auto grid-cols-1 justify-items-center rounded-2xl gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{backgroundImage: "url('/Public/productpage.jpg')"}} >
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default Products;
