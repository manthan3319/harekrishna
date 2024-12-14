import React from 'react'
import Banner from '../Banner/page'
import Experience from '../Experience/page'
import Services from '../Services/page'
import Appointment from '../Appointment/page'
import WhatWeDo from '../WhatWeDo/page'
import WhyChooseUs from '../WhyChooseUs/page'
import OurClients from '../OurClients/page'

const Dashboard = () => {
  return (
    <div>
      <Banner/>
      <Experience/>
      <Services/>
      <Appointment/>
      {/* <WhatWeDo/> */}
      <WhyChooseUs/>
      {/* <OurClients/> */}
    </div>
  )
}

export default Dashboard
