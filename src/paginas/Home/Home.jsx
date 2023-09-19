import React from 'react'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories.jsx'
// import Packs from '../../components/Packs/Packs'
import Featured from '../../components/Featured/Featured'
import { Line } from '../../styles/Global.styles'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Line/>
      <Featured/>
      <Line/>
      <Categories/>
      <Footer/>
    </>
  )
}

export default Home
