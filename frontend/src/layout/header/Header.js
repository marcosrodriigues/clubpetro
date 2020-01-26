import React from 'react'

import Logo from './logo/Logo'
import Navbar from './navbar/Navbar'

import './Header.css'

function Header({toggleSidebar, open}) {

    const user = {
        avatar: '/img/me.jpg',
        name: 'Marcos Rodrigues'
    }

    return (
        <>
        <header className="main-header">
            <Logo open={open}></Logo>
            <Navbar toggleSidebar={toggleSidebar} user={user}></Navbar>
        </header>
        </>
    )
}

export default Header