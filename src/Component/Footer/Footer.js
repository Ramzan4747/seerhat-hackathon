import React from 'react'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d3b66' }}>
      <div className="container">
        <div className="row mt-3 ">
        <div className="col">
          
        </div>
          <div className="col text-white text-start">
            <h5 className='text-center'> Get In Touch</h5>
            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, }} />
            <p style={{fontSize:12}} className='text-center'>123 Street,NewYork,USA</p>
            <p style={{fontSize:12}} className='text-center'>info@gmail.com</p>
            <p style={{fontSize:12}} className='text-center'>+012 345 67890</p>
          </div>
          <div className="col text-white text-start">
            <h5 className='text-center'>Quick Links</h5>
            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, }} />
            <p style={{fontSize:12}} className='text-center'>Home</p>
            <p style={{fontSize:12}} className='text-center'>About Us</p>
            <p style={{fontSize:12}} className='text-center'>Our Services</p>
            <p style={{fontSize:12}} className='text-center'>Meet The Team</p>
            <p style={{fontSize:12}} className='text-center'>Latest Blog</p>
            <p style={{fontSize:12}} className='text-center'>Contact Us</p>
          </div>
          <div className="col text-white text-start">
            <h5 className='text-center'>Popular  Links</h5>
            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, }} />
            <p style={{fontSize:12}} className='text-center'>Home</p>
            <p style={{fontSize:12}} className='text-center'>About Us</p>
            <p style={{fontSize:12}} className='text-center'>Our Services</p>
            <p style={{fontSize:12}} className='text-center'>Meet The Team</p>
            <p style={{fontSize:12}} className='text-center'>Latest Blog</p>
            <p style={{fontSize:12}} className='text-center'>Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
