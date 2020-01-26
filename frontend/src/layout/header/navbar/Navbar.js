import React, { useState } from 'react'

import './Navbar.css'
import '@fortawesome/react-fontawesome'
import Breadcumb from './RouteBreadcumb';

function Navbar({toggleSidebar, user}) {
    const [search, setSearch] = useState(false);
    const [message, setMessage] = useState(false);
    const [bell, setBell] = useState(false);
    const [profile, setProfile] = useState(false);

    function setSidebar(e) {
        e.preventDefault();
        toggleSidebar(true);
    }

    function showSearch(e) {
        e.preventDefault();
        if (search) {
            alert('Pesquisa indisponível');
            return;
        }
        setSearch(true);
    }

    function showMessage(e) {
        e.preventDefault();
        setBell(false);
        setMessage(!message);
        setProfile(false);
    }

    function showBell(e) {
        e.preventDefault();
        setMessage(false);
        setBell(!bell);
        setProfile(false);
    }

    function showProfile(e) {
        e.preventDefault();
        setMessage(false);
        setBell(false);
        setProfile(!profile);
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
                        <div style={{ display: search ? 'inline-flex' : 'none', marginRight: search ? '15px' : '0px' }} className="">
                            <input type="text" className="form-control" placeholder="Pesquisar..." />
                        </div>
                        <i className="fa fa-search" onClick={showSearch} />
                    </div>
                    <div className="each-menu">
                        <i className="fa fa-envelope" onClick={showMessage}>
                            <i className="notification fa fa-circle orange" />
                        </i>
                        {message ? 
                            <div className="my-box my-message">
                                message
                            </div>
                            :""}
                    </div>
                   
                    <div className="each-menu">
                        <i className="fa fa-bell" onClick={showBell}>
                            <i className={!bell ? "notification fa fa-circle orange" : ""} />
                        </i>
                        {bell ? 
                        <div className="my-box my-bell">
                            bells
                        </div>
                        :""}
                    </div>
                </div>

                <div className="profile" onClick={showProfile}>
                    <div className="avatar">
                        <img src={user.avatar} width="45" height="45" alt="Marcos Rodrigues" />
                    </div>
                    <div className="name">{user.name}</div>
                    {profile ? 
                        <div className="my-box my-profile">
                            profile
                        </div>
                    : ""
                    }
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar