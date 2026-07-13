import { Phone, Pin, Mail } from 'lucide-react'
import {FaInstagram, FaFacebook , FaWhatsapp, FaXTwitter} from "react-icons/fa6"
import React from 'react'

function Footer() {
  return (
    <div className='max-w-7xl flex bg-linear-to-r items-center from-white via-[#f3e4ce] to-white border border-green-800 mb-3 px-25 justify-between mx-auto object-cover bg-no-repeat bg-center rounded-full h-45 bg-zinc-500 mt-5 '>
      <div className='flex flex-col gap-2'>
        <h1 className='font-medium text-sm bg-green-500/20 rounded-full px-2'>Quick Links</h1>
        <ul className='ml-2 text-[14px]'>
          <li className='cursor-pointer hover:text-green-900'>Home</li>
          <li className='cursor-pointer hover:text-green-900'>Medicine</li>
          <li className='cursor-pointer hover:text-green-900'>Categories</li>
          <li className='cursor-pointer hover:text-green-900'>About</li>
        </ul>
      </div>
      <div className='flex  flex-col gap-2'>
        <h1 className='font-medium text-sm bg-green-500/20 rounded-full px-2 '>Customer Support</h1>
        <ul className='ml-2 text-[14px]'>
          <li className='cursor-pointer hover:text-green-900'>FAQs</li>
          <li className='cursor-pointer hover:text-green-900'>Privacy Policy</li>
          <li className='cursor-pointer hover:text-green-900'>Terms & Conditions</li>
          <li className='cursor-pointer hover:text-green-900'>Shipping Policy</li>
        </ul>
      </div>
      <div className='flex flex-col gap-2.5 mt-1'>
        <h1 className='font-medium text-sm bg-green-500/20 rounded-full w-max px-2'>Contact</h1>
        <ul className='flex flex-col gap-2 text-[14px]'>
          <div className='flex items-center'>
            <Pin size={18} className='fill-green-800 mr-2 text-green-800'/>
          <li>Satna, India</li>
          </div>
          <div className='flex items-center'>
          <Phone size={18} className='fill-green-800 mr-1.5 text-green-800'/>
          <li>+91 1234567890</li>
          </div>
          <div className='flex items-center'>
            <Mail size={18} className='text-green-900 mr-2'/>
          <li>Support@MediHive.com</li>
          </div>
        </ul>
      </div>
      <div className='flex flex-col gap-1 mt-5 text-[14px]'>
        <h1 className='font-medium text-sm mb-1 bg-green-500/20 rounded-full px-2 w-max'>Follow Us</h1>
        <div className='flex items-center cursor-pointer group'>
          <FaInstagram size={15} className=' group-hover:text-pink-600 mr-2'/>
        <ul className='mb-0.5'>Instagram</ul>
        </div>
        <div className=' flex group cursor-pointer items-center'>
          <FaFacebook size={15} className='mr-2 group-hover:text-blue-700'/>
        <ul>Facebook</ul>
        </div>
        <div className='flex group cursor-pointer items-center'>
          <FaWhatsapp size={15} className='mr-2 group-hover:text-green-600'/>
        <ul>Whatsapp</ul>
        </div>
        <div className='flex cursor-pointer items-center'>
          <FaXTwitter size={15} className='mr-2'/>
        <ul>Twitter</ul>
        </div>
      </div>
        
    </div>
  )
}

export default Footer