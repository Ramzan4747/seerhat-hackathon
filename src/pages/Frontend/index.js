import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

import Home from './Home'
import About from './About'
import Contact from './Contact'
export default function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
              
                </Routes>
            </main>
            <Footer />
        </>
    )
}
