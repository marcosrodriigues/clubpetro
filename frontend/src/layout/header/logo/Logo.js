import React from 'react'

import './Logo.css'

import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to="/" className="logo">
            <span className="logo-mini bg-lg"><span className="orange">CP</span></span>
            <span className="logo-lg bg-lg">clubpetr<span className="orange">o</span></span>
        </Link>
    )
}

export default Logo