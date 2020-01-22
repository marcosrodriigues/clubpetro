import React from 'react'

import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Modal from '../../modal/Modal'

import './Index.css'

function Index() {
    return (
        <div className="clubpetro wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <Modal></Modal>
        </div>

    )
}

export default Index