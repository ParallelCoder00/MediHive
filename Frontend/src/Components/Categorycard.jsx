import React from 'react'
import categories from '../../category.js'

function Categorycard({category}) {
  return (
    <div className='w-70 h-70 '>
        <img className='w-20 h-20 bg-green-300 opacity-40' src={category.image} alt={categories.title} />
        <h2>{category.title}</h2>
    </div>
  )
}

export default Categorycard