 
import { BrowserRouter, Route, Routes as RouteRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home_page } from './pages/Home_page'
import { About_page } from './pages/About_page'
import { Not_found } from './pages/Not_found'
import { Footer } from './components/Footer'
import { Service } from './pages/Service'
import { A_z_waste } from './pages/A_z_waste'
import { Find_vendors } from './pages/Find_vendors'
import {Baanza_pro } from './pages/Baanza_pro'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'
 

export const AppRouter : React.FC  = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <RouteRouter>
          <Route path='*' element={<Not_found  />} />
            <Route path='/' element={<Home_page  />} />
            <Route path='/about' element={<About_page  />} />
            <Route path='/services' element={<Service />} />
            <Route path='/a-z_waste' element={<A_z_waste />} />
            <Route path='/vendors' element={<Find_vendors />} />
            <Route path='/baanza_pro' element={<Baanza_pro />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
        </RouteRouter>
        <Footer />
    </BrowserRouter>
  )
}
