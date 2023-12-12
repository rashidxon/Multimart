import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Card from '../pages/Card'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Singup from '../pages/Signup'
import ProtectedRouter from '../routers/ProtectedRouter'
import AddProducts from '../admin/AddProducts'
import AllProducts from '../admin/AllProducts'
import Dashboard from '../admin/Dashboard'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'home'} />}/>
      <Route path='home' element={<Home/>} />
      <Route path='shop' element={<Shop/>} />
      <Route path='shop/:id' element={<ProductDetails/>} />
      <Route path='card' element={<Card/>} />
      <Route path='/*' element={<ProtectedRouter/>} >
      <Route path='checkout' element={<Checkout/>} /> 
      <Route path='dashboard' element={<Dashboard/>} /> 
      <Route path='dashboard/all-products' element={<AllProducts/>} /> 
      <Route path='dashboard/add-product' element={<AddProducts/>} /> 
      </Route>
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Singup/>} />
    </Routes>
  )
}

export default Routers