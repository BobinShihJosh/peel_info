import React from 'react' 
import styles from '../style.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PeelerTestimonial, Faq, PeelerFeatures, PeelerProduct, PeelerHero, Navbar, NavbarPeeler, CTA, Footer, Stats, Testimonials, Hero } from "../components";

const PeelerInfo = () => {
  return (
    <div className='bg-primaryB w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          < NavbarPeeler />
        </div>
      </div>

      <div className={`bg-primaryB ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* < Hero /> */}
        </div>
      </div>

      <div className={`bg-primaryB ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}> 
          <PeelerHero/>
          < PeelerFeatures />  
          < PeelerTestimonial /> 
          < PeelerProduct />
          <section id="FAQ" >< Faq /></section>
           
          < Footer />
        </div>
      </div>
    </div>
  )
}

export default PeelerInfo