import React from 'react'
// Original imports (commented for future use)
/*
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import WhatNewOne from '@/components/Home1/WhatNewOne'
import productData from '@/data/Product.json'
import Collection from '@/components/Home1/Collection'
import TabFeatures from '@/components/Home1/TabFeatures'
import Banner from '@/components/Home1/Banner'
import Benefit from '@/components/Home1/Benefit'
import testimonialData from '@/data/Testimonial.json'
import Testimonial from '@/components/Home1/Testimonial'
import Instagram from '@/components/Home1/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'
*/

// New landing page components
import Header from '@/components/Landing/Header'
import HeroSection from '@/components/Landing/HeroSection'
import Features from '@/components/Landing/Features'
import Partners from '@/components/Landing/Partners'
import HowItWorks from '@/components/Landing/HowItWorks'
import FAQ from '@/components/Landing/FAQ'
import CallToAction from '@/components/Landing/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <Features />
      <Partners />
      <HowItWorks />
      <FAQ />
      <CallToAction />
    </main>
  )
}
