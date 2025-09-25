 
import { BrowserRouter, Route, Routes as RouteRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home_page } from './pages/Home_page'
import { Not_found } from './pages/Not_found'
import { Footer } from './components/Footer'
 

export const AppRouter : React.FC  = () => {
  return (
    <BrowserRouter>
    <Navbar />
        <RouteRouter>
          <Route path='*' element={<Not_found  />} />
            <Route path='/' element={<Home_page  />} />
        </RouteRouter>
        <Footer />
    </BrowserRouter>
  )
}
