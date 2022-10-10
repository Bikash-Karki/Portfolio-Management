import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddStock from './pages/AddStock'
import Dashboard from './pages/Dashboard'
import TransactionList from './pages/TransactionList'

const MyRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/addstocks' element={<AddStock />} />
                    <Route path='/transaction-lists' element={<TransactionList />} />
                </Routes>
            </Router>
        </>
    )
}

export default MyRoute