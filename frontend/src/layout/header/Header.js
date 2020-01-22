import React from 'react'

import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'

import './Header.css'

function Header() {
    return (
        <>
        <header className="main-header">
            <Logo></Logo>
            <Navbar></Navbar>
        </header>
        </>
    )
}

export default Header