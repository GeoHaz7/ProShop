import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import HomeScreen from '../src/screens/HomeScreen';
import ProductScreen from '../src/screens/ProductScreen';
import CartScreen from '../src/screens/CartScreen';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/order/:id' element={<OrderScreen />}></Route>
            <Route path='/placeorder' element={<PlaceOrderScreen />}></Route>
            <Route path='/payment' element={<PaymentScreen />}></Route>
            <Route path='/shipping' element={<ShippingScreen />}></Route>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/register' element={<RegisterScreen />}></Route>
            <Route path='/profile' element={<ProfileScreen />}></Route>
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}>
              <Route path=':id' element={<CartScreen />} />
            </Route>
            <Route path='/admin/userlist' element={<UserListScreen />}></Route>
            <Route
              path='/admin/productlist'
              element={<ProductListScreen />}
            ></Route>
            <Route
              path='/admin/productlist/:pageNumber'
              element={<ProductListScreen />}
            ></Route>
            <Route
              path='/admin/orderlist'
              element={<OrderListScreen />}
            ></Route>
            <Route
              path='/admin/user/:id/edit'
              element={<UserEditScreen />}
            ></Route>
            <Route
              path='/admin/product/:id/edit'
              element={<ProductEditScreen />}
            ></Route>
            <Route path='/search/:keyword' element={<HomeScreen />}></Route>
            <Route path='/page/:pageNumber' element={<HomeScreen />}></Route>
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<HomeScreen />}
            ></Route>
            <Route path='/' element={<HomeScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
