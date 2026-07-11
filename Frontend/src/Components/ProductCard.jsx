import { Heart, IndianRupee, ShoppingCart } from 'lucide-react'
import React from 'react'

function ProductCard({product}) {
  return (
    <div className='w-64 rounded-lg border-2 border-zinc-200 bg-white p-4 shadow-sm shadow-black transition duration-300 ease-in-out transform-gpu hover:-translate-y-0.5 hover:border-green-500 hover:shadow-md'>
        <nav className='flex items-center justify-between'>
            <div className='rounded-full bg-green-950 px-3 py-1'>
                <h2 className='text-[10px] font-semibold text-white'>20% OFF</h2>
            </div>
            <Heart size={18} className='cursor-pointer text-zinc-600 hover:text-red-500'/>
        </nav>

        <div className='relative mt-4 flex h-32 w-full items-end justify-center pb-3 rounded-md'>
            <span aria-hidden='true' className='absolute bottom-4 h-3 w-28 rounded-full bg-zinc-900/50 blur-md' />
            <img
              src={product.image}
              alt={product.name}
              className='relative z-10 max-h-28 max-w-40 cursor-pointer object-contain transition-transform duration-500 ease-in-out hover:scale-105'
            />
        </div>

        <div className='mt-4'>
        <div>
            <h3 className='text-sm font-semibold text-zinc-950'>{product.name}</h3>
            <h3 className='mt-1 text-xs font-semibold text-zinc-500'>{product.category}</h3>
        </div>
        <div className='mt-3 flex items-center justify-between'>
          <div className='flex items-end gap-2'>
            <div className='flex items-center text-green-950'>
            <IndianRupee size={16}/>
            <h1 className='text-lg font-bold'>{product.price}</h1>
            </div>
            <div className='flex items-center text-zinc-400 line-through'>
            <IndianRupee size={13}/>
            <h3 className='text-sm'>{product.oldPrice}</h3>
            </div>
          </div>
            <button className='flex h-9 w-9 items-center justify-center rounded-full bg-green-950 text-white transition hover:bg-green-700'>
              <ShoppingCart size={17} className='cursor-pointer'/>
            </button>
        </div>
        </div>
    </div>
  )
}

export default ProductCard
