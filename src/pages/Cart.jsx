import React from 'react'
import Carts from '../components/cart/Carts'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

export default function Cart() {
  return (
    <>
      <Header/>
      <div className='side-bar text-center mb-4'>
        <p className='text-primary p-2'>Cart</p>
      </div>
      
      <Carts/>
      <Footer/>
    </>
  )
}
