import React from 'react'
import {  Route, Routes } from 'react-router-dom'


import { LoginPage } from '../auth/pages/LoginPage'
import { Navbar } from '../ui/components/NavBar'
import { HeroesRouter } from '../heroes'


export const AppRouter = () => {
  return (
    <>

    <Routes>

        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRouter />} />

    </Routes>
    </>
  )
}
