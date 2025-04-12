import React from 'react'
const Navbar = () => {
  return (
    <div >
     
      <div>
      {/* <div >
        <img src='logo.png' alt="logo"/>
        
      </div> */}
        <ul className='bg-sky-500 w-full text-1xl flex justify-end font-bold text-white p-5'>
          <li className='ms-8 p-2 space-x-4'><a href="home" className='flex-1'>Home</a></li>
          <li className='ms-8 p-2'><a href="about" className='flex-1'>About</a></li>
          <li className=' ms-8 p-2'><a href="section" className='flex-1'>Section</a></li>
          <li className='mr-4 p-2'><a href="contact us" className='flex-1'>Contact us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar