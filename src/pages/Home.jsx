import React from 'react'
import style from '../style.js'
import styles from '../style.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar,  Stats, Testimonials, Hero } from "../components";

const Home = () => {
  return (
    <div className='bg-primaryB w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          < Navbar />
        </div>
      </div>

      <div className={`bg-primaryB ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          < Hero />
        </div>
      </div>

      <div className={`bg-primaryB ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          < Stats />
          < Business />
          < Billing />
          {/* < CardDeal /> */}
          < Testimonials />
          {/* < Clients /> */}
          < CTA />
          < Footer />
        </div>
      </div>
    </div>
  )
}

export default Home