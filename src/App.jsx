import { useState } from 'react'
import React from 'react'
import Hero from './components/Hero'
import MyFile from './components/MyFile'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LawyerSignIn from './components/LawyerSignIn'
import LawyerSignUp from './components/LawyerSignUp'
import ClientSignIn from './components/ClientSignIn'
import ClientSignUp from './components/ClientSignUp'
import ForgotPassword from './components/ForgotPassword'
import EmailVerification from './components/EmailVerification'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/LawyerSignIn" element={<LawyerSignIn />} />
        <Route path="/LawyerSignUp" element={<LawyerSignUp />} />
        <Route path="/ClientSignIn" element={<ClientSignIn />} />
        <Route path="/ClientSignUp" element={<ClientSignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/EmailVerification" element={<EmailVerification />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
