import React, { useState } from 'react'

export default function Navbar() {
  return (
    <section className='flex flex-col items-center justify-center bg-[#060223]'>
        <div className='navbar w-full flex gap-1 sm:gap-5 items-center justify-between z-104 px-20 py-10'>
            <div className='flex justify-center items-end text-[#C99F4A]'>
            <a href="/#"><img src="../Jurident-Logo.png" className=' max-w-[18vh]' alt="" /></a>
            <a href="/#/about" >About</a>
            <a href="/#/hire" >Hire Me</a>
            </div>
            <div className='flex justify-center items-end text-[#C99F4A]'><a href="/#/Login">Login/Sign Up</a></div>   
        </div>
    </section>
  )
}
