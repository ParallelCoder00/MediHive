import React from 'react'
import { Truck } from 'lucide-react';
import { Users } from 'lucide-react';
import { PhoneForwarded } from 'lucide-react'

function Topbar() {
  return (
    <div>
        <div className='w-full h-8 items-center text-xs flex bg-green-900'>
            <div className='flex max-w-7xl gap-3 mx-auto'>
            <h3 className=''><Truck size={18} className='text-white'/></h3>
            <h3 className='text-white font-semibold'>Free delivery on orders above ₹200</h3>
            </div>
            <div className='flex gap-8 max-w-7xl mx-auto'>
            <div className='flex items-center gap-3'>
                <h3><Users size={18} className='text-white'/></h3>
                <h3 className='text-white font-semibold'>24/7 Customer Support</h3>
            </div>
            <div className='flex items-center gap-2.5'>
                <h3><PhoneForwarded size={16} className='text-white'/></h3>
                <h3 className='text-white font-semibold'>+1 23456789</h3>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar