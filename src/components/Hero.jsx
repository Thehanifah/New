import React from 'react'
import './Hero.css'
import heroImage from '../images/hero.png'

function Hero() {
  return (
    <>
      < div className=" hero-container  flex-xl-column-reverse d-flex justify-content-start" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className='hero-word'>
      <h1 className='rare '>Explore</h1>
      <h1 className='explore '>RareWrld</h1>
      </div>
     </div>
    </>
  )
}

export default Hero
