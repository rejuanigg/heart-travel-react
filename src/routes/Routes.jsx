import React from 'react'
import { 
    BrowserRouter as BrowseRouter,
    Routes as RouterDomRoutes,
    Route as RouterDomRoute
} from 'react-router-dom'

import Home from '../paginas/Home/Home'
import Layout from '../components/Layout/Layout'
import Products from '../paginas/Products/Products'
import AboutUs from '../paginas/AboutUs/AboutUs'
import ContactUs from '../paginas/ContactUs/ContactUs'

const Routes = () => {
  return (
    <BrowseRouter>
        <Layout>

            <RouterDomRoutes>
                <RouterDomRoute path="/" element={<Home/>}/>
                <RouterDomRoute path="/products" element={<Products/>}/>
                <RouterDomRoute path="/aboutUs" element={<AboutUs/>}/>
                <RouterDomRoute path="/contactUs" element={<ContactUs/>}/>
                <RouterDomRoute path="*" element={<h1>404</h1>}/>
            </RouterDomRoutes>

        </Layout>
    </BrowseRouter>
  )
}

export default Routes
