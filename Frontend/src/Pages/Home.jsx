import React from 'react'
import Hero from '../Components/Hero'
import MiddleBar from '../Components/MiddleBar'
import Categories from '../Components/Categories'
import TopPicks from '../Components/TopPicks'

function Home() {
  return (
    <div>
      <Hero/>
      <MiddleBar/>
      <Categories/>
      <TopPicks/>
    </div>
  )
}

export default Home