import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar' 
import Home from './paginas/Home/Home'

function App() {

  return (
    <>
      <Layout>
      <Navbar/>
      <Home/>
      </Layout>
    </>
  )
}

export default App
