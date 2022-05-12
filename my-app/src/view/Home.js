import React from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className='container-flud bg-img'>
         <Navbar/>
      <div className='row justify-content-center w-100 py-5'>
          <div className='col-12 text-center text-white py-5'>
              <h1 className='pb-2 px'>ALBENIS KERQELI</h1>
              <h4 className='my-3 pxx'>Web Designer</h4>
              <button type="button" className="btn btns">Hire Me</button>
          </div>
      </div>
    </div>
  )
}

export default Home
