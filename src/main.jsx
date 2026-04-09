import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Cards/>
    <Footer/>
  </StrictMode>
)
