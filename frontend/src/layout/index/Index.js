import React, { useState, useEffect } from 'react'

import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import RoutesConfig from '../../RoutesConfig'

import { BrowserRouter as Router } from 'react-router-dom'

import './Index.css'

function Index() {
    const [isOpen, setIsOpen] = useState(true);

    function toggleOpen(e) {
        setIsOpen(!isOpen);
    }

    return (
        <div className="clubpetro wrapper">
            <Router>
                <Header toggleSidebar={toggleOpen} open={isOpen}></Header>
                <aside className="main-sidebar">
                    <Sidebar open={isOpen}></Sidebar>
                </aside>
                <main className="main-content">
                    <div className="row border-left">
                        <div className="col-sm-12">
                            <RoutesConfig></RoutesConfig>
                        </div>
                    </div>
                </main>
            </Router>
        </div>

    )
}

export default Index