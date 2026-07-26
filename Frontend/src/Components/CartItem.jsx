import { IndianRupee, Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ product, quantity, onQuantityChange, onRemove }) {
  const savings = Math.max(product.originalPrice - product.price, 0);

  return (
    <article className="group flex gap-3 rounded-2xl border border-[#e8dfd1] bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:gap-5 sm:p-5">
      <div className="flex h-24 w-20 shrink-0 items-center justify-center rounded-xl bg-[#fbf6ed] p-2 sm:h-30 sm:w-28">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="mb-1 text-[10px] font-bold tracking-[0.12em] text-green-700 uppercase">
              {product.category}
            </p>
            <h2 className="truncate text-base font-bold text-green-950 sm:text-lg">
              {product.name}
            </h2>
            <p className="mt-1 text-xs text-zinc-500">{product.packSize} · {product.brand}</p>
          </div>
          <button
            type="button"
            onClick={() => onRemove(product.id)}
            aria-label={`Remove ${product.name} from cart`}
            className="rounded-full p-2 text-zinc-400 transition-colors hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1 text-lg font-extrabold text-green-950">
              <IndianRupee size={17} strokeWidth={2.5} />
              {product.price * quantity}
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-xs text-zinc-400">
              <span className="line-through">₹{product.originalPrice * quantity}</span>
              {savings > 0 && <span className="font-semibold text-green-700">Save ₹{savings * quantity}</span>}
            </div>
          </div>

          <div className="flex items-center rounded-lg border border-[#d9cfbf] bg-[#fffdfa] p-0.5">
            <button
              type="button"
              onClick={() => onQuantityChange(product.id, quantity - 1)}
              disabled={quantity === 1}
              aria-label={`Decrease ${product.name} quantity`}
              className="rounded-md p-1.5 text-green-950 transition-colors hover:bg-[#f2e7d7] disabled:cursor-not-allowed disabled:text-zinc-300"
            >
              <Minus size={15} />
            </button>
            <span className="w-8 text-center text-sm font-bold text-green-950">{quantity}</span>
            <button
              type="button"
              onClick={() => onQuantityChange(product.id, quantity + 1)}
              aria-label={`Increase ${product.name} quantity`}
              className="rounded-md bg-green-950 p-1.5 text-white transition-colors hover:bg-green-800"
            >
              <Plus size={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
