import React from 'react'
import product from '../Data/product'
import ProductCard from './ProductCard'
import { MoveRight } from 'lucide-react'

function TopPicks() { 
  return (
    <section className='max-w-7xl mt-12 bg-linear-to-b rounded-4xl from-[#f3e4ce] to-white p-5 mx-auto'>
      <div className='mb-5'>
        <h3 className='text-xs tracking-wider font-semibold text-zinc-700'>FEATURED MEDICINES</h3>
        <h2 className='text-2xl font-bold text-green-950'>Top Picks For You</h2>
        <h3 className='ml-265 cursor-pointer group text-[13px] flex text-green-950 border border-green-800 bg-green-100 rounded-full justify-center w-48 -mt-5 font-semibold'>View all medicines <MoveRight
            size={20}
            className="mt-0.5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
          /></h3>
      </div>
      <div className='flex justify-center gap-10'>
        {product.map((product) =>(
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

    </section>
  )
}

export default TopPicks