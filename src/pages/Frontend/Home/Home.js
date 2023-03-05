import React from 'react'
import AboutCard from '../../../Component/AboutCard/AboutCard'
import Blog from '../../../Component/Blog/Blog'
import Carousal from '../../../Component/Carousal/Carousal'
import ChooseUsCard from '../../../Component/ChooseUsCard/ChooseUsCard'
import ContactForm from '../../../Component/ContactForm/ContactForm'
import Logo from '../../../Component/Logo/Logo'
import Price from '../../../Component/Price/Price'
import Services from '../../../Component/Services/Services'
import Team from '../../../Component/Team/Team'
import Testimonial from '../../../Component/Testimonial/Testimonial'

export default function Home() {
  return (
    <>
      <Carousal />
      <br/>
      <br/>
      <br />
      <br />
      <AboutCard />
      <ChooseUsCard/>
      <Services/>
      <Price/>
      <ContactForm/>
      <Testimonial/>
      <Team/>
      <Blog/>
      <Logo/>
      
    </>
  )
}
