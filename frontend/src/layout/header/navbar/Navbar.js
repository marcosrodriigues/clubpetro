import React, { useEffect, useState } from 'react'

import './Navbar.css'
import '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <nav className="navbar" role="navigation">
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <i className="fa fa-bars bg-lg"></i>
                <span className="ml-20">
                    Anti-Fraude
                </span>
            </a>
            <div className="navbar-menu">
                <div class="menu bg-lg">
                    <div class="each-menu">
                        <i className="fa fa-search" />
                    </div>
                    <div class="each-menu">
                        <i className="fa fa-envelope" />
                    </div>
                    <div class="each-menu">
                        <i className="fa fa-bell" />
                    </div>
                </div>

                <div className="profile">
                    <div className="avatar">
                        <img src={require('../../../assets/img/me.jpg')} width="45" height="45" />
                    </div>
                    <div className="name">Marcos Rodrigues</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar