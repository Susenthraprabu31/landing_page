import React from 'react'
import Navigate from './Components/NavBar'
import Header from './Components/header'
import SectionIconGrid from './Components/SectionIconGrid'
import SectionImageShowcase from './Components/SectionimageShowcase'
import Testimonial from './Components/Testimonials'
import SignupNow from './Components/SignupNow'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      {/* Navigation component call */}
       <Navigate/>
       {/* Header component call */}
       <Header/>
       {/* Icon grid component call */}
       <SectionIconGrid/>
       {/* Image show case component call */}
       <SectionImageShowcase/>
       {/* People review component call */}
       <Testimonial/>
       {/* Signup component call */}
       <SignupNow/>
       {/* Footer component call */}
       <Footer/>
    </>
  )
}

export default App