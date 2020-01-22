import React from 'react'

import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Modal from '../../modal/Modal'
import RoutesConfig from '../../RoutesConfig'

import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import './Index.css'

function Index() {
    return (
        <div className="clubpetro wrapper">
            <Router>
                <Header></Header>
                <aside className="main-sidebar">
                    <Sidebar></Sidebar>
                </aside>
                <main className="main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <RoutesConfig></RoutesConfig>
                        </div>
                    </div>
                </main>
            </Router>
            <Modal></Modal>
        </div>

    )
}

export default Index