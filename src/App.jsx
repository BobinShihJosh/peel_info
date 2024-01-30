import React, { useEffect } from 'react';
import style from './style.js'
import styles from './style.js'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Home from './pages/Home.jsx';
import PeelerInfo from './pages/PeelerInfo.jsx';

ReactGA.initialize('G-W4N30P3K3B')

const App = () => {
  useEffect(() => { 
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = { <Home />}></Route>
          <Route path='/Home' element = { <Home />}></Route>
          <Route path='/BecomeAPeeler' element = { <PeelerInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App