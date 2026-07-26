import { useMemo } from "react";
import { ChevronRight, House, IndianRupee, ShieldCheck, TicketPercent, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useCart } from "../Hooks/useCart";

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const totals = useMemo(() => {
    const subtotal = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const savings = cart.reduce(
      (sum, product) => sum + (product.originalPrice - product.price) * product.quantity,
      0
    );
    const delivery = subtotal === 0 || subtotal >= 499 ? 0 : 49;
    return { subtotal, savings, delivery, total: subtotal + delivery };
  }, [cart]);

  const itemCount = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <main className="min-h-screen bg-[#fcfaf6] pb-16">
      <section className="border-b border-[#eadfce] bg-linear-to-b from-[#f5e8d3] to-[#fcfaf6]">
        <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-zinc-600">
              <li><Link to="/" className="inline-flex items-center gap-1.5 hover:text-green-900"><House size={15} />Home</Link></li>
              <li aria-hidden="true"><ChevronRight size={16} className="text-zinc-400"/></li>
              <li className="font-medium text-green-950">Shopping Cart</li>
            </ol>
          </nav>
          <h1 className="heading-font mt-3 text-4xl tracking-wide text-green-950 sm:text-5xl">Your cart</h1>
          <p className="mt-2 text-sm text-zinc-600">Review your healthcare essentials before checkout.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        {cart.length ? (
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="rounded-2xl border border-[#eadfce] bg-[#f7f0e5] p-3 sm:p-5">
              <div className="mb-4 flex items-center justify-between px-1">
                <div>
                  <h2 className="text-xl font-bold text-green-950">Cart items</h2>
                  <p className="mt-1 text-sm text-zinc-500">{itemCount} {itemCount === 1 ? "item" : "items"} in your bag</p>
                </div>
                <span className="rounded-full bg-green-950 px-3 py-1 text-xs font-bold text-white">{cart.length} products</span>
              </div>

              <div className="cart-items-scroll space-y-3 overflow-y-auto pr-1 sm:pr-2">
                {cart.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    quantity={product.quantity}
                    onQuantityChange={updateQuantity}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
            </div>

            <aside className="lg:sticky lg:top-20">
              <div className="overflow-hidden rounded-2xl border border-[#e4d9c9] bg-white shadow-sm">
                <div className="bg-green-950 px-6 py-5 text-white">
                 <h2 className="text-xl font-bold">Order summary</h2>
                  <p className="mt-1 text-sm text-green-100">A clear view of your order total</p>
                </div>
                <div className="p-6">
                  <label className="mb-2 block text-sm font-semibold text-green-950">Have a coupon?</label>
                  <div className="flex gap-2">
                    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-[#d8cdbc] px-3 text-zinc-400"><TicketPercent size={17} /><input className="min-w-0 w-full py-2 text-sm outline-none" placeholder="Enter code" /></div>
                    <button type="button" className="rounded-lg bg-[#f5e8d3] px-3 text-sm font-bold text-green-950 transition hover:bg-[#ead7bc]">Apply</button>
                  </div>
                  <div className="my-6 space-y-3 text-sm">
                    <div className="flex justify-between text-zinc-600"><span>Subtotal</span><span className="font-semibold text-zinc-800">₹{totals.subtotal}</span></div>
                    <div className="flex justify-between text-green-700"><span>Product savings</span><span className="font-semibold">− ₹{totals.savings}</span></div>
                    <div className="flex justify-between text-zinc-600"><span>Delivery</span><span className="font-semibold text-zinc-800">{totals.delivery ? `₹${totals.delivery}` : "FREE"}</span></div>
                  </div>
                  <div className="flex items-center justify-between border-t border-dashed border-[#d8cdbc] pt-5">
                    <span className="text-base font-bold text-green-950">Total payable</span>
                    <span className="flex items-center text-2xl font-extrabold text-green-950"><IndianRupee size={20} strokeWidth={2.5} />{totals.total}</span>
                  </div>
                  <button type="button" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-950 py-3.5 text-sm font-bold text-white transition hover:bg-green-800"><ShieldCheck size={18} />Proceed to checkout</button>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-[#eef5ed] px-4 py-3 text-sm text-green-950"><Truck size={20} className="shrink-0" /><span><strong>Free delivery</strong> on orders above ₹499</span></div>
            </aside>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#d8cdbc] bg-white px-6 py-20 text-center"><h2 className="text-2xl font-bold text-green-950">Your cart is empty</h2><p className="mt-2 text-zinc-500">Add your healthcare essentials to see them here.</p><Link to="/products" className="mt-6 inline-block rounded-xl bg-green-950 px-5 py-3 text-sm font-bold text-white">Continue shopping</Link></div>
        )}
      </section>
    </main>
  );
}

export default CartPage;
