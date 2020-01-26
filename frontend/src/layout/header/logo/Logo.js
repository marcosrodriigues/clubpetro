import React, { useState, useEffect } from 'react'

import './Logo.css'

import { Link } from 'react-router-dom'

function Logo({open}) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (open) setDisplay("");
        else setDisplay("none");
    }, [open])

    return (
        <Link to="/" className="logo" style={{display: display}}>
            <span className="logo-mini bg-lg"><span className="orange">CP</span></span>
            <span className="logo-lg bg-lg">clubpetr<span className="orange">o</span></span>
        </Link>
    )
}

export default Logo