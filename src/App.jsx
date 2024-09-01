import './App.css'
import Header1 from './components/Header1'
import Preview from './components/Preview'
import Products from './components/Products'
import Cart from './components/Cart'
import Filters from './components/Filters'
import ProductView from './components/ProductView'
import Promo from './components/Promo'
import Contact from './components/Contact'
import Slider from './components/Slider'
import { useState } from 'react'
import DeliveryForm from './components/DeliveryForm'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import SignIn from './components/Sign in'
import SignUp from './components/Sign up'



function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    
<>
    <Header1 toggleCart={toggleCart}/>
      <Routes>
    <Route path='/delivery' element={<DeliveryForm/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<SignUp/>}/>


    
    <Route path='/' element={
<>
      <Promo/>
      <Preview/>
     <Filters/>
      <ProductView/>
</>

    }/>

      </Routes>
     <Cart isCartOpen={isCartOpen} toggleCart={toggleCart}/>
     <Footer/>
</>
  )
}

export default App
