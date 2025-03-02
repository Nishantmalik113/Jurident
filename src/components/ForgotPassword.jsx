import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function ForgotPassword() {

  const {resetPassword} = useAuth()

  const [isResetEmailSent, setIsResetEmailSent] = useState(false)
  const [Resetemail, setResetemail] =useState('')

  async function handlePasswordReset() {
    if(!Resetemail || !Resetemail.includes('@')){
      return
    }
    try{
      await resetPassword(Resetemail)
    }catch(err){
      console.log(err.message)
    }finally{
      setIsResetEmailSent(true)
    }
  }

  return (
    <div className="min-h-screen overflow-hidden py-10 sm:py-0  flex flex-col bg-[#060223] items-center justify-center relative">
        {isResetEmailSent &&(
          <div className='absolute'>
            <div onClick={()=>{
              setIsResetEmailSent(false)
              window.location.href='../register'
              }} className='relative w-[100vw] h-[100vh] bg-white opacity-[0.3] z-103'></div>
            <div className='absolute left-130 top-30 flex flex-col items-center max-w-[550px] z-104 bg-[#292B2D] p-10 rounded-3xl'>
            <img src="../reset-email-sent.gif" alt="" />
            <h1 className='text-3xl text-white font-semibold'>RESET EMAIL SENT</h1>
          </div>
          </div>
        )}
        <img src="../ellipse-top.png" className='absolute rotate-27 right-[-25vw] top-[-20vh] sm:right-[-150px] sm:top-[-200px] z-102' alt="" />
        <img src="../ellipse-bottom.png" className='absolute sm:bottom-[-300px] bottom-[-20vh]' alt="" />
        <img src="../JURIDENT.png" className='absolute opacity-0 sm:opacity-[1] left-5' alt="" />
        <img src="../Jurident-Logo-bottom.png" className='absolute opacity-0 sm:opacity-[1] right-5 bottom-5' alt="" />
        <div className='flex flex-col gap-3 items-center p-5 z-101 rounded-lg w-full'>
            <img src="../ForgotPassword.png" alt="" className='w-[100px]' />
            <h2 className="text-5xl font-semibold text-[#C99F4A] text-center">Forgot Password</h2>
            <div className='flex flex-col gap-5 max-w-3xs'>
                <p className="text-center text-gray-300 mt-1 text-sm">Are you ready to become a legal eagle? Login to the app and spread your wings in the courtroom.</p>
                <input value={Resetemail} placeholder='Email' onChange={(e)=>{setResetemail(e.target.value)}} className="w-full p-3 bg-white text-black rounded-lg focus:outline-none" />
                <button type='button' onClick={handlePasswordReset} className="w-full bg-blue-600 p-2.5 rounded-lg text-white font-semibold hover:bg-blue-700 text-lg">
                    Send Reset Email
                </button>
            </div>
        </div>
    </div>
  )
}
