import React from 'react'

import './Sidebar.css'

function Sidebar() {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="menu-item">
                    <i className="fa fa-clock-o"></i>
                    DASHBOARD
                </div>
                <div className="menu-item">
                    <i className="fa fa-share"></i>
                    RESGATES
                </div>
                <div className="menu-item active">
                    <i className="fa fa-briefcase"></i>
                    ANTI FRAUDE
                </div>
                <div className="menu-item">
                    <i className="fa fa-exchange"></i>
                    VENDAS
                </div>
                <div className="menu-item">
                    <i className="fa fa-bar-chart-o"></i>
                    RELATÓRIOS
                </div>
                <div className="menu-item">
                    <i className="fa fa-user-circle-o"></i>
                    PERFIL
                </div>
                <div className="menu-item">
                    <i className="fa fa-feed"></i>
                    CAMPANHAS
                </div>
            </section>
        </aside>
    )
}

export default Sidebar