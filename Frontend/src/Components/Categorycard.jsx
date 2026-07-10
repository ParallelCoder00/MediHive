import React from 'react'

function Categorycard({category}) {
  const Icon = category.icon
  return (
    <div className='w-50 h-35 rounded-3xl bg-[#faf2ebb5] flex flex-col items-center justify-center gap-3 '>
      <div className='p-3 rounded-[100%] bg-green-300/10'>
        {Icon && <Icon size={25} className='text-green-800'/>}
        </div>
        <h2 className='font-semibold'>{category.title}</h2>
    </div>
  )
}

export default Categorycard
