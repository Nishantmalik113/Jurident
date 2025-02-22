import React, { useState } from 'react'

export default function Navbar() {
  return (
    <section className='flex flex-col items-center justify-center bg-[#060223]'>
        <div id='navbar' className='navbar w-full flex gap-1 sm:gap-5 items-center justify-between  p-10 px-20'>
            <div className='flex justify-center items-end text-[#C99F4A]'>
            <a href="/#"><img src="../Jurident-Logo.png" className=' max-w-[18vh]' alt="" /></a>
            <a href="/#/about" >About</a>
            <a href="/#/hire" >Hire Me</a>
            </div>   
            <div className='text-[#C99F4A] hover:cursor-pointer'>
                <a href="/#/login">Login/SignUp</a>
            </div>
        </div>
    </section>
  )
}
