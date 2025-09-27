import React from 'react'
import MyNavbar from './Navbar'
import Hero from './Hero'
import CardsSection from './Cards'
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <Hero/>
      {/* Navbar */}
      <div className="absolute top-0 w-full">
      <MyNavbar/>
      </div>
      <CardsSection/>
      <Footer/>
    </div>
  )
}
