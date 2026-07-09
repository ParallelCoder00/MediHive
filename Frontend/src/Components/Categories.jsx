import React from 'react'
import category from '../../category'
import Categorycard from './Categorycard'

function Categories() {
  return (
    <section>
        <h1>
          Shop By Category
        </h1>

        <div className='flex max-w-7xl mx-auto justify-center items-center'>
          {category.map((category) => (
            <Categorycard 
            key={category.id}
            category={category}
            />
          ))}
        </div>
    </section>
  )
}

export default Categories