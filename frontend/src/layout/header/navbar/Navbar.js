import React from 'react'

import './Navbar.css'
import '@fortawesome/react-fontawesome'
import Breadcumb from './RouteBreadcumb';

function Navbar({toggleSidebar}) {

    function setSidebar(e) {
        e.preventDefault();
        toggleSidebar(true);
    }

    return (
        <nav className="navbar" role="navigation">
            <div>
            <button className="sidebar-toggle button-href" onClick={setSidebar} >
                <i className="fa fa-bars bg-lg"></i>
            </button>
            <div className="breadcumb-text">
                <span className="ml-20">
                    <Breadcumb></Breadcumb>
                </span>                
            </div>
            
            </div>
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
                        <img src={'/img/me.jpg'} width="45" height="45" alt="Marcos Rodrigues" />
                    </div>
                    <div className="name">Marcos Rodrigues</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar