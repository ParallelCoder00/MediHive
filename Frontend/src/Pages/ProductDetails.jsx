import {
  ChevronRight,
  CircleCheck,
  FileText,
  House,
  PillIcon,
  ShieldCheck,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { dummyProducts } from "../Data/productPage";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import ProductCard from "../Components/ProductCard";
import { useCart } from "../Hooks/useCart";

function ProductDetails() {
  const { id } = useParams();
  const product = dummyProducts.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const matchingProducts = product
    ? dummyProducts.filter(
        (item) =>
          item.id !== product.id &&
          (product.relatedProducts?.includes(item.id) ||
            item.category === product.category),
      )
    : [];

  const relatedProducts = product
    ? [
        ...matchingProducts,
        ...dummyProducts.filter(
          (item) =>
            item.id !== product.id &&
            !matchingProducts.some((matchingProduct) => matchingProduct.id === item.id),
        ),
      ].slice(0, 4)
    : [];

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <section className="bg-linear-to-b from-[#f7f0e2] to-white">
      <nav aria-label="Breadcrumb" className="px-6 py-4">
        <ol className="flex items-center gap-2 text-sm font-medium text-zinc-600">
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-green-600"
            >
              <House size={15} className="text-green-600" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={16} className="text-zinc-400" />
          </li>
          <li>
            <Link to="/products" className="text-green-600 ">
              All Products
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={16} className="text-zinc-400" />
          </li>
          <li aria-current="page" className="text-zinc-500">
            Product Details
          </li>
        </ol>
      </nav>
      <div className="w-full flex h-100vh gap-30 p-6">
        <div className="bg-gray-100/30 w-160 h-120 -mt-4 rounded-lg shadow-neutral-600 shadow-md flex items-center justify-center">
          <img src={product.image} className="w-80 h-80 p-4 object-cover" />
        </div>
        <div className="mt-3">
          <h1 className="font-semibold text-4xl text-green-900 tracking-wider">
            {product.name}
          </h1>
          <h3 className="text-sm mt-3 ml-2 tracking-wider">
            By{" "}
            <span className="text-green-600 font-semibold">
              {product.brand}
            </span>
          </h3>
          <div className="flex items-center mt-3 gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={18}
                className={
                  index < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}

            <div className="w-px h-4 bg-zinc-500 ml-2"></div>

            <span className="ml-2 text-sm text-gray-800">{product.rating}</span>
            <div className="w-px h-4 bg-zinc-500 ml-2"></div>
            <span className="text-green-700 font-medium text-sm ml-3">
              ({product.reviewCount} <span className="ml-1"> Reviews)</span>
            </span>
          </div>
          <div className="flex items-center gap-4 mt-3">
            <h1 className="text-2xl font-extrabold tracking-wider text-green-900">
              ₹{product.price}.00
            </h1>
            <h3 className="font-semibold text-sm text-zinc-400 tracking-wider">
              <del>₹55.00</del>
            </h3>
          </div>
          <p className="mt-3 text-[12px] tracking-wide text-zinc-500 font-semibold">
            Inclusive all taxes
          </p>
          <div className="flex mt-3 gap-3 w-120 items-center rounded-lg bg-green-300/30 p-2 border border-green-800/50">
            <CircleCheck className="fill-green-600 text-white" />
            <h2 className="font-semibold text-sm text-green-900"> In Stock</h2>
            <div className="w-px h-5 bg-zinc-400/60"></div>
            <h3 className="text-[12px] tracking-wide text-zinc-500 font-semibold">
              {product.stock} items left
            </h3>
          </div>
          <h2 className="text-sm tracking-wide text-black mt-3">
            Prescription Required:{" "}
            <span className="text-green-700 font-bold"> No</span>
          </h2>
          <div className="flex items-center gap-5 mt-8">
            <h2 className="font-bold text-sm">Quantity:</h2>
            <div className="border rounded-lg border-stone-700/50">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-4 py-1 text-xl rounded-l-lg cursor-pointer font-semibold border-r border-stone-700/50 hover:bg-stone-100"
              >
                -
              </button>
              <span className="px-4 m-1 font-semibold text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-1 text-xl rounded-r-lg cursor-pointer font-semibold border-l border-stone-700/50 hover:bg-stone-100"
              >
                +
              </button>
            </div>
          </div>
          <div className=" flex gap-2 mt-5">
            <button type="button" onClick={() => addToCart(product, quantity)} className="flex items-center gap-3 py-3 rounded-lg bg-green-950 w-60 justify-center cursor-pointer transition hover:bg-green-800">
              <ShoppingCart size={20} className="text-white" />
              <h2 className="text-white text-sm font-semibold tracking-wider">
                Add to Cart
              </h2>
            </button>
            <div className="flex items-center border-2 border-green-800 gap-3 py-3 rounded-lg w-60 justify-center cursor-pointer">
              <FaWhatsapp className="text-green-600" size={20} />
              <h2 className="text-green-800 text-sm font-semibold tracking-wider">
                Order on WhatsApp
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-green-800/40 w-[97%] mx-auto rounded-lg">
        <div className="flex p-6 items-center border-b border-green-800/40">
          <div className="p-4 bg-green-300/40 rounded-full">
            <FileText size={25} className="text-green-800" />
          </div>
          <div className="ml-5">
            <h2 className="font-bold text-green-900 text-lg">Description</h2>
            <p className="text-sm tracking-wide">{product.description}</p>
          </div>
        </div>
        <div className="flex p-6 items-center border-b border-green-800/40">
          <div className="p-4 bg-green-300/40 rounded-full">
            <ShieldCheck size={25} className="text-green-800" />
          </div>
          <div>
            <h2 className=" ml-5 font-bold text-green-900 text-lg">Uses</h2>
            <ul className="list-disc list-inside space-y-2 ml-5 text-green-900">
              {product.uses.map((use, index) => (
                <li key={index}>
                  <span className="text-black">{use}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex p-6 items-center">
          <div className="p-4 bg-green-300/40 rounded-full">
            <PillIcon size={25} className="text-green-800" />
          </div>
          <div>
            <h2 className=" ml-5 font-bold text-green-900 text-lg">Dosage</h2>
            <p className="text-sm tracking-wide ml-5">{product.dosage}</p>
          </div>
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-xs font-semibold tracking-wider text-green-700">
            RECOMMENDED FOR YOU
          </p>
          <h2 className="mt-1 text-3xl font-bold text-green-950">
            You May Also Like
          </h2>
          <div className="mt-6 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default ProductDetails;
