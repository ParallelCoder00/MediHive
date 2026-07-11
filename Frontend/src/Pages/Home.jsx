import React from 'react'
import Hero from '../Components/Hero'
import MiddleBar from '../Components/MiddleBar'
import Categories from '../Components/Categories'
import TopPicks from '../Components/TopPicks'
import Testimonials from '../Components/Testimonials'

function Home() {
  return (
    <div>
      <Hero/>
      <MiddleBar/>
      <Categories/>
      <TopPicks/>
      <Testimonials/>
    </div>
  )
}

export default Home