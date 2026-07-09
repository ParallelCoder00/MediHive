import React from 'react'
import { Truck } from 'lucide-react'
import { WalletCards } from 'lucide-react'
import { Undo2 } from 'lucide-react'
import { Headset } from 'lucide-react'

function MiddleBar() {
  return (
    <div className='max-w-7xl mx-auto rounded-full -mt-3 flex items-center justify-between p-10 px-15 bg-[#e9ddbe] shadow-md shadow-black/40 h-15'>
        <div className='flex items-center gap-3'>
            <div className='p-3 bg-green-950 rounded-[100%]'>
        <Truck size={20} className='text-white'/> 
        </div>
        <div>
        <h3 className='font-semibold'>Free Shipping</h3>
        <h5 className='text-xs text-zinc-600'>On orders above $25</h5>
        </div>
        </div>
        <div className='flex items-center gap-3'>
            <div className='p-3 bg-green-950 rounded-[100%]'>
            <WalletCards size={20} className='text-white'/>
            </div>
            <div>
        <h3 className='font-semibold'>Secure Payment</h3>
        <h5 className='text-xs text-zinc-600'>100% secure payment</h5>
        </div>
        </div>
        <div className='flex items-center gap-3'>
            <div className='p-3 bg-green-950 rounded-[100%]'>
            <Undo2 size={20} className='text-white'/>
            </div>
            <div>
        <h3 className='font-semibold'> Easy Returns</h3>
        <h5 className='text-xs text-zinc-600'>7 days easy returns</h5>
        </div>
        </div>
        <div className='flex items-center gap-3'>
            <div className='p-3 bg-green-950 rounded-[100%]'>
            <Headset size={20} className='text-white'/>
            </div>
            <div>
        <h3 className='font-semibold'>  24/7 Support</h3>
        <h5 className='text-xs text-zinc-600'>Always here to support</h5>
        </div>
        </div>
    </div>
  )
}

export default MiddleBar