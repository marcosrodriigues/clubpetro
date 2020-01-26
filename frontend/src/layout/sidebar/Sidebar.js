import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import './Sidebar.css'

function Sidebar({open}) {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (open) setDisplay("");
        else setDisplay("none");
    }, [open])

    return (
        <section className="sidebar" style={{display: display}}>
            <div className="menu-item">
                <Link to="/dashboard">
                    <i className="fa fa-clock-o"></i>
                    DASHBOARD
                </Link>
            </div>
            <div className="menu-item">
                <Link to="/resgates">
                    <i className="fa fa-share"></i>
                    RESGATES
                </Link>
            </div>
            <div className="menu-item active">
                <Link to="/antifraude">
                    <i className="fa fa-briefcase"></i>
                    ANTI FRAUDE
                </Link>
            </div>

            <div className="menu-item">
                <Link to="/vendas">
                    <i className="fa fa-exchange"></i>
                    VENDAS    
                </Link>
            </div>
            <div className="menu-item">
                <Link to="/relatorios">
                    <i className="fa fa-bar-chart-o"></i>
                    RELATÓRIOS    
                </Link>
            </div>
            <div className="menu-item">
                <Link to="/perfil">
                    <i className="fa fa-user-circle-o"></i>
                    PERFIL
                </Link>
            </div>
            <div className="menu-item">
                <Link to="/campanhas">
                    <i className="fa fa-feed"></i>
                    CAMPANHAS
                </Link>
            </div>
        </section>
    )
}

export default Sidebar