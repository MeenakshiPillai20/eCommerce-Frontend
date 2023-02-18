import React from 'react'
import { Container } from 'react-bootstrap'
import shipping from '../images/shipping.svg'
import support from '../images/support.svg'
import refund from '../images/refund.svg'

export default function Section4() {
  return (
    <>
      <Container>
        <div className='sec4-box'>
            <div className='section4-box'>
                <img src={shipping} alt="" />
                <h3 className='sec4-head'>FREE SHIPPING</h3>
                <p className='sec4-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <div className='section4-box'>
                <img src={refund} alt="" />
                <h3 className='sec4-head'>100% REFUND</h3>
                <p className='sec4-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <div className='section4-box'>
                <img src={support} alt="" />
                <h3 className='sec4-head'>SUPPORT 24/7</h3>
                <p className='sec4-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
        </div>
      </Container>
    </>
  )
}
