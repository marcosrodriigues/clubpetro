import React from 'react'

import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'

import './Header.css'

function Header({toggleSidebar, open}) {

    return (
        <>
        <header className="main-header">
            <Logo open={open}></Logo>
            <Navbar toggleSidebar={toggleSidebar}></Navbar>
        </header>
        </>
    )
}

export default Header