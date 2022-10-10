import React from 'react'
import Navbar from '../components/Navbar'

import Sidebar from '../components/Sidebar'
import Transaction from '../components/Transaction'

const Dashboard = () => {
    return (
        <div>
            <div className='d-flex'>
                <Sidebar />
                <div style={{ width: '100%' }}>
                    <Navbar />
                    <Transaction />
                </div>
            </div>
        </div>
    )
}

export default Dashboard