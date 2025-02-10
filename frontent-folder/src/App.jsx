import { Route, Routes, UNSAFE_createClientRoutesWithHMRRevalidationOptOut } from 'react-router-dom' 
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'

function App() {

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
