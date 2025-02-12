import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react' 
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
   
  useEffect(() => {
    Aos.init({duration: 1000});
    
   }, []) 

  return (
    <>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
