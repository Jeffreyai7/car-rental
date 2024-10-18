import React from 'react'
import Logistics from '../molecules/Logistics'
import Faq from '../molecules/Faq'
import DownloadApp from './DownloadApp'
import Hero from '../molecules/Hero'
import Booking from '../molecules/Booking'
import Chooseus from '../molecules/Chooseus'
import Fleet from '../molecules/Fleet'

const MainContent = () => {
  return (
    <main>
        <Hero/>
        <Logistics/>
        <Fleet/>
        <Chooseus/>
        <Faq/>
        <DownloadApp/>
    </main>
  )
}

export default MainContent;