import React from 'react'

import './Navbar.css'
import '@fortawesome/react-fontawesome'

function Navbar() {
    return (
        <nav className="navbar" role="navigation">
            <button className="sidebar-toggle button-href" data-toggle="push-menu" role="button">
                <i className="fa fa-bars bg-lg"></i>
                <span className="ml-20">
                    Anti-Fraude
                </span>
            </button>
            <div className="navbar-menu">
                <div className="menu bg-lg">
                    <div className="each-menu">
                        <i className="fa fa-search" />
                    </div>
                    <div className="each-menu">
                        <i className="fa fa-envelope" />
                    </div>
                    <div className="each-menu">
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